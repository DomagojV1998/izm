import React from 'react';
import './Img.css'
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Img = ({src, size="medium_large", alt = "No image description", classList}) => 
{

    let url = "https://placehold.co/600x400?text=Nema+Slike";

    if(src?.sizes?.[size]){
        url = src?.sizes?.[size]?.source_url;
    } 
    else if(src?.sizes?.["medium"]){
        url = src?.sizes?.["medium"]?.source_url;
    }
    else
        console.log("You don't have an image");

    return (
        <img src={url} alt={alt} className={classList + ' feature-image'} />
    )
};

export default Img;