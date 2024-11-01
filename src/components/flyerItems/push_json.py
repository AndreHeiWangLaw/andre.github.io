import requests
import base64
import json
import os
from urllib.parse import urlparse

def get_file_sha(repo_url, file_path, file_name, token):
    # Parse the URL to get the repo details
    parsed_url = urlparse(repo_url)
    repo = parsed_url.path.strip('/')

    # Prepare the API request to get the file information
    url = f'https://api.github.com/repos/{repo}/contents/{file_path}/{file_name}'
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    # Make the request to get the file info
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        file_info = response.json()
        return file_info['sha']  # Return the SHA of the existing file
    elif response.status_code == 404:
        return None  # File does not exist
    else:
        print(f'Error fetching file info: {response.status_code} - {response.text}')
        return None

def push_file_to_github(repo_url, file_path, file_name, commit_message, content, token):
    # Normalize line endings to LF
    content = content.replace('\r\n', '\n')

    # Get the SHA of the file if it exists
    sha = get_file_sha(repo_url, file_path, file_name, token)
    
    # Parse the URL to get the repo details
    parsed_url = urlparse(repo_url)
    repo = parsed_url.path.strip('/')

    # Prepare the API request
    url = f'https://api.github.com/repos/{repo}/contents/{file_path}/{file_name}'
    
    # Encode the file content
    encoded_content = base64.b64encode(content.encode()).decode()

    # Prepare the payload
    payload = {
        'message': commit_message,
        'content': encoded_content
    }

    # If the file exists, include the SHA in the payload
    if sha:
        payload['sha'] = sha

    # Add headers for authentication
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }

    # Make the request to push the file
    response = requests.put(url, headers=headers, data=json.dumps(payload))

    if response.status_code in (201, 200):
        print('File uploaded successfully!')
    else:
        print(f'Error: {response.status_code} - {response.text}')


# Get user inputs
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')  # Get the token from environment variable
repo_url = input("Enter your GitHub repository link (e.g., https://github.com/username/repo): ")
file_path = 'src/components/flyerItems'  # Path in the repository
file_name = 'flyer_items.json'
commit_message = 'Add or update flyer_items.json'

# Load the JSON data from the local flyer_items.json file
try:
    with open(file_name, 'r', encoding='utf-8') as json_file:  # Specify the encoding here
        content = json_file.read()
except FileNotFoundError:
    print(f"Error: The file '{file_name}' does not exist in the current directory.")
    exit(1)
except UnicodeDecodeError as e:
    print(f"Error decoding file '{file_name}': {e}")
    exit(1)


# Push the file to GitHub
push_file_to_github(repo_url, file_path, file_name, commit_message, content, GITHUB_TOKEN)
