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
          <motion.div className="col-lg-4 mb-4 mb-lg-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3>It all started in 2017, out of a dusty garage on the east side of the city. </h3>
            <p>
              A couple of skaters with grease under their nails and busted decks decided they were tired of wearing the same mass-produced gear that didn’t represent them — or the culture they lived and breathed.
              By day, they were wrenching on beat-up drift cars. By night, they were hitting local skate spots until security showed up. Between it all, they started printing tees by hand, using heat guns and stencils, mixing spray paint with ambition. That garage became the first unofficial HQ of [Your Brand Name] — a label born from the collision of two passions: skateboarding and car culture.
            </p>
            <h3>Built for the Streets. Fueled by Wheels.</h3>
            <p>
                Born from the grind of concrete and the roar of engines, our brand is more than just streetwear — it’s a lifestyle forged by skateboarding and car culture. We live for the late-night sessions, early-morning meets, and every adrenaline-pumped moment in between.
            </p>
          </motion.div>

          <motion.div className="col-lg-4 mb-4 mb-lg-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="/shop">
              <img
                className="about-image img-fluid rounded"
                src="https://front1.edukacija.online/dvidovic/projekt/img/logo7.png"
                alt="About"
              />
            </a>
          </motion.div>

          <motion.div className="col-lg-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <h3>Our designs reflect the raw energy of the streets — inspired by scratched decks, oil-stained hands, and the unshakable drive to keep moving forward.</h3>
            <p>
               Whether you’re dropping into bowls or burning rubber, we’re right there with you — repping the hustle, the rebellion, and the freedom that comes with it.
            </p>
            <h3>We don’t follow trends. We set pace — at 100 mph or on four wheels.</h3>
            <p>
              We don’t follow trends. We set pace — at 100 mph or on four wheels.
              This is for the skaters, the tuners, the misfits, and the die-hards who live to ride and ride to live.
              This is streetwear with an engine. This is our lane.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;