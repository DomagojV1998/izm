import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";

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

        <section class="body">

            <div class="container text-center">

                <div class="col-md-10 m-auto col-sm-12">

                    <div class="img">

                        <a href="/shop"> 

                            <img src="img/Scrape-the-floor front-2.png" alt="Home Image" /> 

                        </a>
                    </div>
                </div>

            </div>

        </section>


    );
};

export default Home;