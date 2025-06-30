import React, { useState, useEffect } from "react";
import "./Contact.css";
import Loading from "../parts/Loading.js";
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch("https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/281");
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = form.name && form.email && form.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // You can connect this to a real API or mail service
      console.log("Message sent:", form);
      setSubmitted(true);
    }
  };

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <motion.div
      className="container text-center py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="step step-1">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="mb-4 fs-5">
              For any questions, custom prints & design don’t hesitate to send us a message.
            </p>

            {submitted ? (
              <div className="alert alert-success">Your message has been sent. Thank you!</div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  className="form-control mb-3"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
                <button
                  type="submit"
                  className={`btn btn-primary ${!isFormValid ? "disabled" : ""}`}
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;