import React from 'react';
import './Img.css'

const Img = ({src, size="medium_large", alt = "Nema opisa za sliku", classList}) => 
{

    let url = "https://placehold.co/600x400?text=Nema+Slike";

    if(src?.sizes?.[size]){
        url = src?.sizes?.[size]?.source_url;
    } 
    else if(src?.sizes?.["full"]){
        url = src?.sizes?.["full"]?.source_url;
    }
    else
        console.log("Nemaš uopće slike");

    return (
        <img src={url} alt={alt} className={classList + ' feature-image'} />
    )
};

export default Img;