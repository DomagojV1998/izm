import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => 
{
    return (
        <motion.footer className="py-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="container text-center">
                <p className="mb-2">
                &copy; {new Date().getFullYear()} scrapethefloor. All rights reserved.
                </p>
                <img src="" alt="Main Banner" className="img-fluid w-100"/>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a href="/shop" className="text-decoration-none">
                    Shop
                </a>
                <a href="/prints" className="text-decoration-none">
                    Prints
                </a>
                <a href="/clothing" className="text-decoration-none">
                    Clothing
                </a>
                <a href="/about" className="text-decoration-none">
                    About
                </a>
                <a href="/contact" className="text-decoration-none">
                    Contact
                </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;