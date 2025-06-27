import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './gutenberg.css';
import './App.css';

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ShopSingle from './components/pages/ShopSingle';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Clothing from "./components/pages/Clothing";
import Prints from "./components/pages/Prints";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
