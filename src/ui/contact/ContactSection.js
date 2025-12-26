import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Mail,
  Award,
  Github,
  Linkedin,
  GraduationCap,
  BookOpen,
  School,
  University,
} from "lucide-react";
import "./ContactSection.css";
const GITHUB_URL =
  process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL =
  process.env.REACT_APP_LINKEDIN_URL ||
  "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL =
  process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.15,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="contact-section"
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="contact-container" variants={itemVariants}>
        {/* LEFT SIDE */}
        <motion.div className="contact-left" variants={itemVariants}>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Let's Connect
          </motion.p>
          <motion.h2
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="contact-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have a question or project in mind? Feel free to reach out — I'd
            love to collaborate.
          </motion.p>

          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Location */}
            <motion.div
              className="info-item"
              variants={listItemVariants}
              whileHover={{ x: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <MapPin className="info-icon" />
              <span>Surat, Gujarat, India</span>
            </motion.div>

            {/* Email */}
            <motion.div
              className="info-item"
              variants={listItemVariants}
              whileHover={{ x: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Mail className="info-icon" />
              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <span>pateldishank19@gmail.com</span>
              </a>
            </motion.div>

            {/* GitHub */}
            <motion.div
              className="info-item"
              variants={listItemVariants}
              whileHover={{ x: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Github className="info-icon" />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <span>19Dishank</span>
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              className="info-item"
              variants={listItemVariants}
              whileHover={{ x: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Linkedin className="info-icon" />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <span>Dishank Patel</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="contact-right" variants={itemVariants}>
          <motion.div
            className="certifications"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3
              className="section-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Award className="section-icon" /> Certifications
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Award className="list-icon" /> Python Workshop — Shell
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Award className="list-icon" /> Prompt Engineering Workshop —
                Rizwan Malek
                <span className="org">
                  {" "}
                  (Senior Developer, Narola Infotech)
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="hobbies"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h3
              className="section-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <GraduationCap className="section-icon" /> Education
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <School className="list-icon" /> SSC
                <span className="org"> (Sanskar Bharti Vidyalaya, 2019)</span>
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <BookOpen className="list-icon" /> HSC
                <span className="org"> (Sanskar Bharti Vidyalaya, 2021)</span>
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GraduationCap className="list-icon" /> Bachelor of computer
                application
                <span className="org">
                  {" "}
                  (Veer Narmad South Gujarat University, 2024)
                </span>
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <University className="list-icon" /> Master of computer
                application
                <span className="org"> (Sarvajanik University, 2026)</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
