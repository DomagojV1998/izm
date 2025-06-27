import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Prints.css"
import Img from "../parts/Img.js"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";

const Shop = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/product?product-category=78&_embed');
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
                    {data.map(product => (

                        <div className="col-md-4 col-sm-4">

                            <Link className="prints-img" to={"/shop/" + product.slug}> 
                                {/*
                                <img src={product?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url} />
                                */}
                                <Img
                                    src={product?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}
                                    size='medium_large' 
                                    alt={'Istaknuta slika za članak: ' + product.title.rendered}
                                    classList='mb-4'
                                />
                            </Link>

                            <p dangerouslySetInnerHTML={{ __html: product.title.rendered }} />

                        </div> 

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Shop;