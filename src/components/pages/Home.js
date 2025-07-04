import React, { useState, useEffect } from "react";
import "./Home.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "../pages/Searchbox.js"   ; 


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

    console.log(data);

    if (error) return <Error />;
    if (!data) return <Loading />;

    const slides = Object.values(data.acf);

    return(
       
        <motion.section className="hero-section d-flex align-items-center justify-content-center text-center text-light" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((imgurl, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <motion.div className="d-block w-100 text-white p-5" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.2 }} style={{  backgroundImage: `url(${imgurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '550px',
                        }}
                        >
                        </motion.div>
                    </div>
                    ))}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="container">
                <h1 className="display-3 mb-4 mt-4">Step Into the Future</h1>
                <p className="lead mb-5 text-white">New collections dropping soon.</p>
                <div className="search-box mb-5">
                    <SearchBox /> 
                </div>
            </div>
            </div>
        </motion.section>
    );
};

export default Home;