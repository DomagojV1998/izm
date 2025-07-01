import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/611');
            if (!response.ok) {
            throw new Error(`Došlo je do greške: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchPage();
    }, []);

    if (error) return <Error />;
    if (!data) return <Loading />;


    return(
        
        <motion.section className="hero-section d-flex align-items-center justify-content-center text-center text-light" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="container">
                <h1 className="display-3 mb-4">Step Into the Future</h1>
                <p className="lead mb-5 text-white">New collections dropping soon.</p>
                <div className="placeholder-img">
                    <img src="https://front1.edukacija.online/dvidovic/projekt/img/logo8.png" alt="Main Banner" className="img-fluid w-100"/>
                </div>
            </div>
        </motion.section>

    );
};

export default Home;