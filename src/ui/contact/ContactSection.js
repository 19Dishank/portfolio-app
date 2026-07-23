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
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.55, staggerChildren: 0.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: {
      opacity: 1, y: 0, rotate: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="contact-sketch-section"
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Outer Desk Doodles */}
      <div className="contact-bg-doodles">
        {/* Spiral top right */}
        <svg className="bg-doodle doodle-spiral" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,50 m 0,-5 a 5,5 0 1,1 0,10 a 10,10 0 1,1 0,-20 a 15,15 0 1,1 0,30 a 20,20 0 1,1 0,-40" fill="none" stroke="var(--pencil)" strokeWidth="2" strokeOpacity="0.5" />
        </svg>
        {/* Crosses bottom left */}
        <svg className="bg-doodle doodle-crosses" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 20,20 L 40,40 M 40,20 L 20,40 M 70,60 L 90,80 M 90,60 L 70,80" fill="none" stroke="var(--marker-red)" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
        </svg>
        {/* Star top left */}
        <svg className="bg-doodle doodle-star" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,10 L 60,40 L 90,45 L 65,65 L 75,95 L 50,75 L 25,95 L 35,65 L 10,45 L 40,40 Z" fill="none" stroke="var(--highlighter)" strokeWidth="2" strokeOpacity="0.5" strokeLinejoin="round" />
        </svg>
        {/* Zig-zags bottom right */}
        <svg className="bg-doodle doodle-zigzags" viewBox="0 0 150 50" filter="url(#roughLine)">
          <path d="M 10,25 L 30,5 L 50,45 L 70,5 L 90,45 L 110,5 L 130,25" fill="none" stroke="var(--ballpoint)" strokeWidth="2" strokeOpacity="0.3" strokeLinejoin="round" />
        </svg>
      </div>

      <motion.div className="contact-sketch-page" variants={itemVariants}>
        
        {/* Double border for the sketch page */}
        <svg className="contact-page-border" width="100%" height="100%" preserveAspectRatio="none">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughPaper)" />
          <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1" strokeOpacity="0.4" filter="url(#roughLine)" />
        </svg>

        {/* Ring holes */}
        <div className="contact-ring-holes">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="hole"></div>
          ))}
        </div>

        {/* Inner Page Doodles */}
        <div className="contact-inner-doodles">
          {/* Coffee Stain */}
          <svg className="inner-doodle doodle-coffee" viewBox="0 0 100 100" filter="url(#roughLine)">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5a2b" strokeWidth="4" opacity="0.3" />
            <circle cx="48" cy="52" r="38" fill="none" stroke="#8b5a2b" strokeWidth="2" opacity="0.4" />
          </svg>
          {/* Paperclip top left */}
          <svg className="inner-doodle doodle-paperclip" viewBox="0 0 50 100" filter="url(#roughLine)">
            <path d="M 20,80 L 20,20 A 10,10 0 0,1 40,20 L 40,70 A 5,5 0 0,1 30,70 L 30,30" fill="none" stroke="var(--ballpoint)" strokeWidth="3" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Messy scribbles bottom right */}
          <svg className="inner-doodle doodle-scribble" viewBox="0 0 150 100" filter="url(#roughLine)">
            <path d="M 10,80 Q 30,20 50,70 T 90,30 T 130,80" fill="none" stroke="var(--marker-red)" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
          </svg>
          {/* Heart middle right */}
          <svg className="inner-doodle doodle-heart" viewBox="0 0 50 50" filter="url(#roughLine)">
            <path d="M 25,45 Q 10,30 10,15 A 10,10 0 0,1 25,15 A 10,10 0 0,1 40,15 Q 40,30 25,45 Z" fill="none" stroke="var(--pencil)" strokeWidth="2" opacity="0.4" />
          </svg>
          {/* Dots top center */}
          <svg className="inner-doodle doodle-dots" viewBox="0 0 50 50" filter="url(#roughLine)">
            <circle cx="10" cy="10" r="2" fill="var(--highlighter)" opacity="0.6" />
            <circle cx="30" cy="20" r="2" fill="var(--highlighter)" opacity="0.6" />
            <circle cx="20" cy="40" r="2" fill="var(--highlighter)" opacity="0.6" />
            <circle cx="40" cy="35" r="2" fill="var(--highlighter)" opacity="0.6" />
          </svg>
          {/* Checkmark bottom left */}
          <svg className="inner-doodle doodle-check" viewBox="0 0 50 50" filter="url(#roughLine)">
            <path d="M 10,25 L 20,35 L 45,10" fill="none" stroke="var(--ballpoint)" strokeWidth="3" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      <motion.div className="contact-sketch-container" variants={itemVariants}>
        
        {/* LEFT SIDE */}
        <motion.div className="contact-left-sketch" variants={itemVariants}>
          <div className="contact-header-group">
            <motion.p className="contact-subtitle-sketch">Let's Connect</motion.p>
            <motion.h2 className="contact-title-sketch">Contact</motion.h2>
            <motion.p className="contact-text-sketch">
              Have a question or project in mind? Feel free to reach out — I'd love to collaborate.
            </motion.p>
            {/* Hand drawn underline under the text */}
            <svg className="contact-text-underline" viewBox="0 0 200 20" preserveAspectRatio="none" filter="url(#roughLine)">
              <path d="M 5,10 Q 100,20 195,5" fill="none" stroke="var(--highlighter)" strokeWidth="4" opacity="0.5" />
            </svg>
          </div>

          <motion.div className="contact-info-sketch" variants={containerVariants}>
            {/* Location */}
            <motion.div className="info-item-sketch" variants={itemVariants}>
              <MapPin className="info-icon-sketch" />
              <span className="info-text">Surat, Gujarat, India</span>
            </motion.div>

            {/* Email */}
            <motion.a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="info-item-sketch info-link-sketch" variants={itemVariants}>
              <Mail className="info-icon-sketch" />
              <span className="info-text">pateldishank19@gmail.com</span>
              {/* Arrow pointing to email */}
              <svg className="doodle-arrow-email" viewBox="0 0 50 30" filter="url(#roughLine)">
                <path d="M 10,20 Q 30,5 45,25 M 35,25 L 45,25 L 45,15" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="hover-squiggly-line" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M 0,5 Q 50,10 100,5 T 200,5" fill="none" stroke="var(--ink)" strokeWidth="2" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="info-item-sketch info-link-sketch" variants={itemVariants}>
              <Github className="info-icon-sketch" />
              <span className="info-text">19Dishank</span>
              <svg className="hover-squiggly-line" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M 0,5 Q 50,10 100,5 T 200,5" fill="none" stroke="var(--ink)" strokeWidth="2" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="info-item-sketch info-link-sketch" variants={itemVariants}>
              <Linkedin className="info-icon-sketch" />
              <span className="info-text">Dishank Patel</span>
              <svg className="hover-squiggly-line" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M 0,5 Q 50,10 100,5 T 200,5" fill="none" stroke="var(--ink)" strokeWidth="2" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* MIDDLE DIVIDER */}
        <div className="contact-divider-sketch">
          <svg viewBox="0 0 20 500" preserveAspectRatio="none" filter="url(#roughLine)">
            <path d="M 10,0 Q 15,100 8,250 T 12,500" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>

        {/* RIGHT SIDE */}
        <motion.div className="contact-right-sketch" variants={itemVariants}>
          
          {/* Certifications Stickynote */}
          <motion.div className="sketch-note-card cert-card" variants={itemVariants}>
            {/* Hand-drawn card border */}
            <svg className="card-sketch-frame" width="100%" height="100%" preserveAspectRatio="none">
               <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" 
                     fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
            </svg>
            <svg className="card-washi-tape tape-1" viewBox="0 0 100 30" preserveAspectRatio="none" filter="url(#roughLine)">
              <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--highlighter)" opacity="0.6" />
            </svg>
            <h3 className="section-heading-sketch">
              <Award className="section-icon-sketch" /> Certifications
            </h3>
            <ul className="sketch-list">
              <li>
                <Award className="list-icon-sketch" /> 
                <span className="list-text">Python Workshop — Shell</span>
              </li>
            </ul>
          </motion.div>

          {/* Education Stickynote */}
          <motion.div className="sketch-note-card edu-card" variants={itemVariants}>
            {/* Hand-drawn card border */}
            <svg className="card-sketch-frame" width="100%" height="100%" preserveAspectRatio="none">
               <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" 
                     fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
            </svg>
            <svg className="card-washi-tape tape-2" viewBox="0 0 100 30" preserveAspectRatio="none" filter="url(#roughLine)">
              <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--marker-red)" opacity="0.2" />
            </svg>
            <h3 className="section-heading-sketch">
              <GraduationCap className="section-icon-sketch" /> Education
            </h3>
            <ul className="sketch-list">
              <li>
                <School className="list-icon-sketch" /> 
                <span className="list-text">SSC <span className="org-sketch">(Sanskar Bharti, 2019)</span></span>
              </li>
              <li>
                <BookOpen className="list-icon-sketch" /> 
                <span className="list-text">HSC <span className="org-sketch">(Sanskar Bharti, 2021)</span></span>
              </li>
              <li>
                <GraduationCap className="list-icon-sketch" /> 
                <span className="list-text">BCA <span className="org-sketch">(VNSGU, 2024)</span></span>
              </li>
              <li>
                <University className="list-icon-sketch" /> 
                <span className="list-text">MCA <span className="org-sketch">(Sarvajanik Univ, 2026)</span></span>
              </li>
            </ul>
          </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
