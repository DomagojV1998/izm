import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";

const About = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/278');
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
        <section class="hero">

            <div class="container text-center">

                <div class="row">

                    <div class="col-lg-4">

                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum quis luctus libero. Curabitur suscipit fermentum 
                            mauris eu scelerisque.Phasellus orci quam, fermentum nec 
                            viverra eu, ultrices ut ligula. Curabitur sed accumsan diam, 
                            ac pulvinar turpis. Integer finibus sapien quis quam vestibulum,
                            a mattis massa egestas.
                        </p>

                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum quis luctus libero. Curabitur suscipit fermentum 
                            mauris eu scelerisque.Phasellus orci quam, fermentum nec 
                            viverra eu, ultrices ut ligula. Curabitur sed accumsan diam, 
                            ac pulvinar turpis. Integer finibus sapien quis quam vestibulum,
                            a mattis massa egestas.
                        </p>

                    </div>

                    <div class="col-lg-4">

                        <a href="/shop"> 

                            <img class="about" src="https://front1.edukacija.online/dvidovic/projekt/img/Glowing%20star%20no%20outer%20glow.png" alt="about" />

                        </a>

                    </div>

                    <div class="col-lg-4">

                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum quis luctus libero. Curabitur suscipit fermentum 
                            mauris eu scelerisque.Phasellus orci quam, fermentum nec 
                            viverra eu, ultrices ut ligula. Curabitur sed accumsan diam, 
                            ac pulvinar turpis. Integer finibus sapien quis quam vestibulum,
                            a mattis massa egestas.
                        </p>

                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum quis luctus libero. Curabitur suscipit fermentum 
                            mauris eu scelerisque.Phasellus orci quam, fermentum nec 
                            viverra eu, ultrices ut ligula. Curabitur sed accumsan diam, 
                            ac pulvinar turpis. Integer finibus sapien quis quam vestibulum,
                            a mattis massa egestas.
                        </p>

                    </div>
                
                </div>

            </div>

        </section>

    );
};

export default About;