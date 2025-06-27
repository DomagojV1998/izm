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
                        throw new Error(`Došlo je do greške: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json[0]);
                } catch (err) {
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
    
        return(
            <section class="hero">

            <div class="container">

                <div class="row">

                    <div class="col-md-6 col-sm-12">

                        <div class="slider">

                            <Slider {...settings}>

                                <div>

                                    <Link onClick={() => setOpen(true)}>

                                        <Img
                                            src={data?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}
                                            size='medium_large' 
                                            alt={'Istaknuta slika za članak: ' + data.title.rendered}
                                            classList="mb-4"
                                        />

                                    </Link>


                                </div>

                                <div>

                                    <Link onClick={() => setOpen(true)}>

                                        <Img
                                            src={data?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}
                                            size='medium_large' 
                                            alt={'Istaknuta slika za članak: ' + data.title.rendered}
                                            classList="mb-4"
                                        />
                                        
                                    </Link>


                                </div>

                            </Slider>

                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={[
                                { src: "https://placehold.co/600x400" },
                                { src: "https://placehold.co/600x400" },
                                { src: "https://placehold.co/600x400" },
                                ]}
                            />

                        </div>

                    </div>

                    <div class="col-md-6 col-sm-12">

                        <div class="selector">

                            <h3> {data.title.rendered} </h3>

                            <h4> 28€ </h4>

                            <label for="size"> Size: </label>

                            <select name="size" class="size">
                                
                                <option class="active" value="choose-option"> Choose option </option>

                                <option value="XS"> XS </option>

                                <option value="S"> S </option>

                                <option value="M"> M </option>

                                <option value="L"> L </option>

                                <option value="XL"> XL </option>

                                <option value="XXL"> XXL </option>

                            </select>

                            <div class="number">

                                <input class="quantity" type="number" value="1" min="1" />

                                <button class="button"> Add to cart </button>

                            </div>

                            <p class="description"> Description: </p>

                            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />

                        </div>

                    </div>

                </div>

            </div>

        </section>
        
        );
};

export default ShopSingle;