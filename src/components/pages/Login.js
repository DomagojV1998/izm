import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://wp1.edukacija.online/backend/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user_display_name);
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
    setIsLoading(false);
  };

  return (
      <motion.div className="container d-flex justify-content-center align-items-center min-vh-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <motion.div  className="card p-4 shadow"  style={{ maxWidth: "400px", width: "100%" }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <motion.h2 className="mb-4 text-center" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            Log in
          </motion.h2>

          {error && <motion.div className="alert alert-danger" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}> {error}</motion.div>}

          <form onSubmit={handleLogin}>
            <motion.div className="mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </motion.div>

            <motion.div className="mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </motion.div>

            <motion.button type="submit" className="btn btn-dark w-100" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 200 }}>
              {isLoading ? "Loading..." : "Log in"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    );
};

export default Login;