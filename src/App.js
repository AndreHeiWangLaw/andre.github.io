import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grocery from './pages/grocery/Grocery';
import Home from './pages/home/Home';
import JsonGenerator from './pages/jsonGenerator/JsonGenerator';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/jsonGenerator" element={<JsonGenerator />} />
        {/* Add more routes for future pages */}
      </Routes>
    </Router>
  );
}

export default App;
