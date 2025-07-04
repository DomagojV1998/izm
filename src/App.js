import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './gutenberg.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ShopSingle from './components/pages/ShopSingle';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Clothing from "./components/pages/Clothing";
import Prints from "./components/pages/Prints";
import Cart from './components/pages/Cart';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout';

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
