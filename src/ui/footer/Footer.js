import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { User } from "lucide-react";
const GITHUB_URL =
  process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL =
  process.env.REACT_APP_LINKEDIN_URL ||
  "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL =
  process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.55,
        staggerChildren: 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="footer-content" variants={itemVariants}>
        <motion.div className="footer-icons" variants={itemVariants}>
          <motion.a
            href={GITHUB_URL}
            className="icon"
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={LINKEDIN_URL}
            className="icon"
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={EMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SiGmail />
          </motion.a>
        </motion.div>

        {/* <div className="footer-likes">
          <button className="like-btn">
            <FaHeart className="heart-icon" /> 2412 Likes
          </button>
        </div> */}

        <motion.div className="footer-tech" variants={itemVariants}>
          <motion.div
            className="tech-item"
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Built with</span>
            <FaReact className="tech-icon react" />
            <span>React</span>
          </motion.div>

          <motion.div
            className="tech-item"
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Styled with</span>
            <FaCss3Alt className="tech-icon css" />
            <span>CSS3</span>
          </motion.div>
          <motion.div
            className="tech-item"
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Build by</span>
            <User className=" user" />
            <span>Dishank</span>
          </motion.div>
          <motion.div
            className="tech-item"
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Deployed on</span>
            <SiVercel className="tech-icon vercel" />
            <span>Vercel</span>
          </motion.div>
        </motion.div>

        <motion.div className="footer-spotify" variants={itemVariants}>
          <motion.iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
            width="280"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.iframe>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Copyright © 2025 Dishank Patel. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
