import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => 
{
    return (
        <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="icons">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                            <Link to="#"><i className="fa-brands fa-square-facebook"></i></Link>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                            <Link to="#"><i className="fa-brands fa-tiktok"></i></Link>
                            <p> scrapethefloor ©2025 All rights reserved </p>                
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Footer;