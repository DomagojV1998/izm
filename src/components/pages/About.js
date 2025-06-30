import React, { useState, useEffect } from "react";
import Loading from "../parts/Loading.js";
import Error from "../parts/Error.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/278"
        );
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

  return (
    <section className="about-hero py-5">
      <div className="container text-center">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-4 mb-4 mb-lg-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>{data.content.rendered ? <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} /> : (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis luctus libero.
                Curabitur suscipit fermentum mauris eu scelerisque. Phasellus orci quam, fermentum nec viverra eu,
                ultrices ut ligula.
              </>
            )}</p>
          </motion.div>

          <motion.div
            className="col-lg-4 mb-4 mb-lg-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/shop">
              <img
                className="about-image img-fluid rounded shadow-lg"
                src="https://front1.edukacija.online/dvidovic/projekt/img/Glowing%20star%20no%20outer%20glow.png"
                alt="About"
              />
            </a>
          </motion.div>

          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis luctus libero.
              Curabitur suscipit fermentum mauris eu scelerisque. Phasellus orci quam, fermentum nec viverra eu,
              ultrices ut ligula. Curabitur sed accumsan diam, ac pulvinar turpis.
            </p>
            <p>
              Integer finibus sapien quis quam vestibulum, a mattis massa egestas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;