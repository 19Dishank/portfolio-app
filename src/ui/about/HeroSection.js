// src/ui/HeroSection.jsx
import React, { memo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./HeroSection.css";
import heroPhoto from "../../assets/dishank-patel.jpeg";
const GITHUB_URL =
  process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL =
  process.env.REACT_APP_LINKEDIN_URL ||
  "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL =
  process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

const HeroSection = memo(function HeroSection() {
  return (
    <section className="hp-hero">
      {/* Left vertical social */}
      <div className="hp-left-social">
        <a
          href={GITHUB_URL}
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={LINKEDIN_URL}
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href={EMAIL_URL} target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <div className="hp-left-line" />
      </div>

      {/* Main content */}
      <div className="hp-inner">
        <motion.div
          className="hp-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.25, 0.1, 0.25, 1],
            layout: { duration: 0.25 },
          }}
        >
          <p className="hp-pre">Hi, my name is</p>

          <h1 className="hp-name">
            Dishank <span className="hp-name-accent">Patel</span>
          </h1>

          <h2 className="hp-role">I build elegant UI &amp; fast web apps</h2>

          <p className="hp-desc">
            I’m currently pursuing my MCA and learning to design and build
            clean, responsive user interfaces that feel fast and enjoyable to
            use.
          </p>

          <div className="hp-cta-row">
            <button
              className="hp-cta"
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See my work
            </button>

            <button
              className="hp-cta ghost"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact me
            </button>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hp-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "circOut",
            layout: { duration: 0.3 },
          }}
        >
          <div className="hp-visual-bg" />
          <div className="hp-photo-wrap">
            <img
              src={heroPhoto}
              alt="Dishank Patel"
              className="hp-photo"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* floating badge 1 */}
          <motion.div
            className="hp-badge hp-badge-1"
            initial={{ x: 20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="b-left">UI</div>
            <div className="b-right">Designer</div>
          </motion.div>

          {/* floating badge 2 */}
          <motion.div
            className="hp-badge hp-badge-2"
            initial={{ x: -30, y: -10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="b-left">React</div>
            <div className="b-right">Developer</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default HeroSection;
