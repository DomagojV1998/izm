import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../parts/Img.js";

const Shop = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/614');
            if (!response.ok) {
            throw new Error('Error occured: ${response.status}');
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
        <motion.section className="hero py-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <p className="fs-4">Clothing</p>
                        <a href="/clothing">
                            <Img
                                className=""
                                src="https://front1.edukacija.online/dvidovic/projekt/img/ftp-front.jpg"
                                alt="clothing"
                            />
                        </a>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <p className="fs-4">Prints</p>
                        <a href="/prints">
                            <Img
                                className=""
                                src="https://front1.edukacija.online/dvidovic/projekt/img/iseeyou.jpg"
                                alt="prints"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Shop;