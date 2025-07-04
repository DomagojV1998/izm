import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Img from "../parts/Img.js"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const ShopSingle = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/product?slug=' + id + '&_embed');
                if (!response.ok) {
                    throw new Error(`Error occured: ${response.status}`);
                }
                const json = await response.json();
                setData(json[0]);
                } 
            catch (err) {
                setError(err.message);
                }
            };
    
        fetchPage();
        }, []);
    
    if (error) return <Error />;
    if (!data) return <Loading />;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    console.log(data);
    
    return(
        <section className="hero py-5">
            <div className="container">
                <motion.div className="row" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <Slider {...settings}>
                            {["slika1", "slika2"].map((key, i) => (
                                <div key={i}>
                                    <Link onClick={() => setOpen(true)}>
                                        <img
                                            src={data.acf[key].sizes.medium_large || data.acf[key].sizes.medium_large}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                                { src: data.acf.slika1.sizes.medium_large},
                                { src: data.acf.slika2.sizes.medium_large},
                            ]}
                        />
                    </div>
                    <div className="col-md-5 col-sm-12 ms-5">
                        <motion.div className="selector" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                            <h3 className="mb-3">{data.title.rendered}</h3>
                            <h4 className="mb-4">28€</h4>
                            <label htmlFor="size">Size:</label>
                            <select name="size" className="form-select mb-3">
                                <option value="choose-option">Choose option</option>
                                {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
                                <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <input className="form-control w-25" type="number" min="1" defaultValue="1" />
                                <button className="btn btn-outline-light">Add to cart</button>
                            </div>
                            <p className="mt-4">Description:</p>
                            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
        
        );
};

export default ShopSingle;