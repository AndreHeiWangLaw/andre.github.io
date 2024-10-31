// App.js
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grocery from './pages/grocery/Grocery';
import Eggs from './pages/grocery/Eggs';
import Meat from './pages/grocery/Meat';
import Veggies from './pages/grocery/Veggies';
import Home from './pages/home/Home';
import JsonGenerator from './pages/jsonGenerator/JsonGenerator';

// layout
import Header from './components/layout/Header'; // Import the Header component
import Footer from './components/layout/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/eggs" element={<Eggs />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/veggies" element={<Veggies />} />
            <Route path="/jsonGenerator" element={<JsonGenerator />} />
            {/* Add more routes for future pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
