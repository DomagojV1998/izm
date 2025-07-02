import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const username = localStorage.getItem("username");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/prints", label: "Prints" },
    { to: "/clothing", label: "Clothing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav className="navbar navbar-expand-lg py-3" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <motion.img src="https://front1.edukacija.online/dvidovic/projekt/img/logo9.png" alt="Logo" className="img-fluid" style={{ maxHeight: "40px" }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ to, label }) => (
              <motion.li className="nav-item" key={to} whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }}>
                <Link className="nav-link" to={to}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto">
            {username ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, {username}</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }}>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }}
                >
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </motion.li>
              </>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;