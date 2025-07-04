import React from 'react';
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => 
{
    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: "500px"}}>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    )
};

export default Loading;