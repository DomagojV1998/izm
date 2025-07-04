import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
    
        localStorage.removeItem('username');
        localStorage.removeItem('token');

        // Redirect after 2 seconds
        const timeout = setTimeout(() => {
        navigate('/login');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center"
        >
            <h1 className="mb-3">You have been logged out</h1>
            <p className="text-muted">Redirecting to login...</p>
        </motion.div>
        </div>
    );
    };

export default Logout;