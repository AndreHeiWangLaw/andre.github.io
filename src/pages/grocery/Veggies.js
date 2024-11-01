// src/pages/grocery/Veggies.js
import React from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

const Veggies = () => {
    // Set the search terms as an array
    const searchTerms = [
        "fruit", "vegetable", "apple", "banana", "carrot", "onion", "tomato", "cucumber", "grape",
        "lettuce", "spinach", "potato", "melon", "squash", "berries", "orange", "pear", "broccoli", 
        "cauliflower", "cabbage", "asparagus", "zucchini", "mango", "papaya", "cherry", "avocado", 
        "peach", "plum", "kiwi", "apricot", "pomegranate", "nectarine", "fig", "tangerine", 
        "dragon fruit", "lychee", "coconut", "passion fruit", "bell pepper", "sweet potato", 
        "radish", "beet", "turnip", "celery", "artichoke", "eggplant", "green bean", 
        "snap pea", "kale", "chard", "arugula", "endive", "bok choy", "mustard greens",
        "mulberry", "starfruit", "persimmon", "cranberry", "raspberry", "gooseberry", 
        "blood orange", "custard apple", "soursop", "jackfruit", "durian",
        "leek", "fennel", "parsnip", "pumpkin", "mushroom", "chayote", "okra", 

        // !regex
        "!chips", "!snack", "!drink", "!juice", "!oil", "!milk", "!cocktail", "!sauce", "!baby"
    ];
    
    return (
        <div className="container"> {/* Add a container class for styling */}
            <FlyerItems searchTerms={searchTerms} /> {/* Pass the array of search terms to FlyerItems */}
        </div>
    );
};

export default Veggies;
