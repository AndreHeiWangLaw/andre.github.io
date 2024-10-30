// src/pages/grocery/Grocery.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

// layout
import Header from '../../components/layout/Header'; // Import the Header component
import Footer from '../../components/layout/Footer'; // Import the Footer component

const Grocery = () => {
    return (
        <div>
            <Header />
            <p1>Lorem ipsum dolor sit amet. Aut odit sunt qui doloremque pariatur non totam quis ea 
                fuga amet. Id dolorem corrupti et dolor excepturi est debitis earum eos eaque sunt 
                cum placeat aliquam ad quia quia. Ea numquam neque et saepe quia qui aperiam quibusdam 
                id temporibus obcaecati. Aut dolore rerum id libero deserunt sed dolor ullam a voluptas 
                voluptas? Qui autem harum ut enim reiciendis aut quia tempore. Quo sapiente blanditiis 
                quo saepe neque qui reprehenderit reprehenderit est minima consequuntur vel quis vero 
                cum asperiores itaque nam dolorem facilis.
            </p1>
            <FlyerItems /> {/* Render FlyerItems component */}
            <Footer />
        </div>
    );
};

export default Grocery;
