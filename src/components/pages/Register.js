import React, { useState } from "react";
import axios from "axios";
import { setStatus } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    birth_date: "",
    username: "",
    password: ""
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Funkcija za dohvaćanje tokena
  const getToken = async () => {

    try {
      const response = await fetch("https://wp1.edukacija.online/backend/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: "dvidovic",
          password: "93Yh 01mb xbny Zd3r LzRP pMqd"
        })
      });

      const data = await response.json();

      if (response.ok) {
        return data.token; //Vraća token
        setError(null);
        navigate("/"); // ✅ Preusmjeri na početnu
      } else {
        // ✅ Ekstrakcija samo teksta iz eventualnog HTML-a
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(data.message, 'text/html');
        const cleanMessage = parsedHtml.body.textContent || "Log in error.";

        setError(cleanMessage);
      }
    } catch (err) {
      setError("Service error. Try again.");
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://wp1.edukacija.online/backend/wp-json/wp/v2/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + await getToken() // Ako je potrebno
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "The registration failed.");
      }

      const result = await response.json();
      setSuccessMessage("The registration was succesfull!");
      setErrorMessage(null);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        birth_date: "",
        username: "",
        password: ""
      });
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <motion.div className="container mt-5" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <motion.h2 className="mb-4 text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 12 }}>
        User registration
      </motion.h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Surname</label>
          <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email adress</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date od birth</label>
          <input type="date" className="form-control" name="birth_date" value={formData.birth_date} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <motion.div className="col-12 text-center mt-4">
          <motion.button type="submit" className="btn btn-dark px-5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} >
            Register now!
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default Register;