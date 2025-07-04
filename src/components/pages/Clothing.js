import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Clothing.css"
import Img from "../parts/Img.js"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Clothing = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/product?product-category=77&_embed');
            if (!response.ok) {
            throw new Error(`An Error occured: ${response.status}`);
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
        <section className="hero">
            <div className="container">
                <motion.div className="row" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {data.map(product => (
                    <motion.div className="col-md-4 col-sm-12 mb-5" key={product.id} nwhileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <Link className="clothing-img" to={'/shop/' + product.slug}>
                        <Img
                        src={product?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}
                        size="medium_large"
                        alt={"Image: " + product.title.rendered}
                        classList=""
                        />
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: product.title.rendered }} />
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clothing;