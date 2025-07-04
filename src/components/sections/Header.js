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
    <motion.nav className="navbar navbar-expand-lg py-3 fw-bold" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="container text-center">
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg> Login
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }}
                >
                  <Link className="nav-link" to="/register">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg> Register
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ cursor: "pointer" }}
                >
                  <Link className="nav-link" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
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