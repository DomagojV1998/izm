import React, { useState, useEffect } from "react";
import "./Contact.css"
import Loading from "../parts/Loading.js"
import Error from "../parts/Error.js";

const Contact = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/281');
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
        <div className="container text-center">
            <div className="step step-1">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <p> For any questions, custom prints & design don't hesitate to send us a message </p>
                        <form className="contact-form">
                            <input type="text" className="name" placeholder="Name" required onkeyup="Validate(this)" />
                            <input type="email" className="email" placeholder="Email" required onkeyup="Validate(this)" />
                            <textarea placeholder="Message" className="message" required onkeyup="Validate(this)"></textarea>
                            <button type="submit" className="btn disabled">Send</button>
                        </form>
                    </div>    
                </div>              
            </div>
        </div>
    );
};

export default Contact;