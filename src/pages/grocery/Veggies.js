// src/pages/grocery/Veggies.js
import React, { useState } from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component
import './Button.css'; // Import the CSS file

const Veggies = () => {
    // Set the initial search terms as an array
    const initialSearchTerms = [
        "fruit", "vegetable", "légume", "apple", "pomme", "banana", "banane", "carrot", "carotte", 
        "onion", "oignon", "tomato", "tomate", "cucumber", "concombre", "grape", "raisin", "potatoe",
        "lettuce", "laitue", "spinach", "épinard", "potato", "pomme de terre", "melon", "melon", 
        "squash", "courge", "berries", "baies", "orange", "orange", "pear", "poire", 
        "broccoli", "brocoli", "cauliflower", "chou-fleur", "cabbage", "chou", "asparagus", "asperge", 
        "zucchini", "courgette", "mango", "mangue", "papaya", "papaye", "cherry", "cerise", 
        "avocado", "avocat", "peach", "pêche", "plum", "prune", "kiwi", "kiwi", 
        "apricot", "abricot", "pomegranate", "grenade", "nectarine", "nectarine", "fig", "figue", 
        "tangerine", "mandarine", "dragon fruit", "fruit du dragon", "lychee", "litchi", 
        "coconut", "noix de coco", "passion fruit", "fruit de la passion", "bell pepper", "poivron", 
        "sweet potato", "patate douce", "radish", "radis", "beet", "betterave", "turnip", "navet", 
        "celery", "céleri", "artichoke", "artichaut", "eggplant", "aubergine", "green bean", "haricot vert", 
        "snap pea", "pois mange-tout", "kale", "chou frisé", "chard", "bette", "arugula", "roquette", 
        "endive", "endive", "bok choy", "bok choy", "mustard greens", "moutarde", "mulberry", "mûre", 
        "starfruit", "carambole", "persimmon", "kaki", "cranberry", "canneberge", "raspberry", "framboise", 
        "gooseberry", "groseille", "blood orange", "orange sanguine", "custard apple", "pomme-cannelle", 
        "soursop", "corossol", "jackfruit", "jacquier", "durian", "durian", "leek", "poireau", 
        "fennel", "fenouil", "parsnip", "panais", "pumpkin", "citrouille", "mushroom", "champignon", 
        "chayote", "chayotte", "okra", "gombo", 

        // !regex
        "!chips", "!snack", "!casse-croûte", "!drink", "!boisson", "!juice", "!jus", 
        "!oil", "!huile", "!milk", "!lait", "!cocktail", "!cocktail", "!sauce", "!sauce", 
        "!baby", "!bébé"
    ];

    const [searchTerms, setSearchTerms] = useState(initialSearchTerms);

    const handleStoreFilter = (storeName) => {
        const filterTerm = `*${storeName}`;

        // Check if the filter term is already in the searchTerms
        if (!searchTerms.includes(filterTerm)) {
            // Add the filter term to the searchTerms
            setSearchTerms((prevTerms) => [...prevTerms, filterTerm]);
        } else {
            // Remove the filter term if it already exists
            setSearchTerms((prevTerms) => prevTerms.filter(term => term !== filterTerm));
        }
    };

    const stores = ['Iga', 'Metro', 'Maxi', 'SuperC']; // Define the store names

    return (
        <div className="container"> {/* Add a container class for styling */}
            <div className="filter-buttons">
                {stores.map(store => (
                    <button
                        key={store}
                        className={searchTerms.includes(`*${store}`) ? 'active' : ''}
                        onClick={() => handleStoreFilter(store)}
                    >
                        {store}
                    </button>
                ))}
            </div>

            <FlyerItems searchTerms={searchTerms} /> {/* Pass the updated array of search terms to FlyerItems */}
        </div>
    );
};

export default Veggies;
