import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";

const Shop = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/614');
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

         <section className="hero">

            <div className="container text-center">

                <div className="row">

                    <div className="col-md-6 col-sm-6">

                        <p> Clothing </p>

                        <a href="/clothing"> 

                            <img className="clothing" src="https://front1.edukacija.online/dvidovic/projekt/img/3%20black%20t-shirt.jpg" alt="clothing" />

                        </a>

                    </div>


                    <div className="col-md-6 col-sm-6">

                        <p> Prints </p>

                        <a href="/prints"> 

                            <img className="prints" src="https://front1.edukacija.online/dvidovic/projekt/img/flowereye%20red.jpg" alt="prints" />

                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Shop;