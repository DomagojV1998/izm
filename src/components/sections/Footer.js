import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    const links = [
        { to: "/shop", label: "Shop" },
        { to: "/prints", label: "Prints" },
        { to: "/clothing", label: "Clothing" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ];
    const socialIcons = [
        { icon: faInstagram, url: "https://instagram.com", label: "Instagram" },
        { icon: faTwitter, url: "https://x.com/", label: "Twitter" },
        { icon: faYoutube, url: "https://youtube.com", label: "YouTube" },
        { icon: faLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
    ];

  return (
    <motion.footer className="py-4 fw-bold" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="container text-center">
        {/* Social Icons */}
        <div className="mb-3 d-flex justify-content-center gap-4">
          {socialIcons.map((item, index) => (
            <motion.a key={index} href={item.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}  transition={{ delay: index * 0.1 }}  className="text-dark fs-4" aria-label={item.label} whileHover={{ scale: 1.4, rotate: 10, color: "#007bff" }}  whileTap={{ scale: 0.9 }} style={{ display: "inline-block" }}>
              <FontAwesomeIcon icon={item.icon} />
            </motion.a>
          ))}
        </div>

        {/* Nav Links */}
        <div className="d-flex justify-content-center gap-4 flex-wrap mb-3">
          {links.map((link, index) => (
            <motion.div key={link.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.1, color: "#007bff" }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}
              >
                <Link className="nav-link" to={link.to}>{link.label}</Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="mb-2">
          &copy; {new Date().getFullYear()} scrapethefloor. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
