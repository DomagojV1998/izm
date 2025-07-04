import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css" 

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
  const [showPassword, setShowPassword] = useState(false);
  const togglePassswordVisibility = () => setShowPassword(!showPassword);

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
    <section className="hero py-5">
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
          <div className="col-md-6 password-eye">
            <label className="form-label">Password</label>
            <input type= {showPassword ? "text" : "password"} className="form-control" name="password" value={formData.password} onChange={handleChange} required />
            <span onClick={togglePassswordVisibility}> {showPassword ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>)} </span>
          </div>
          <motion.div className="col-12 text-center mt-4">
            <motion.button type="submit" className="btn btn-dark px-5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} >
              Register now!
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Register;