import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiGmail, SiVercel } from "react-icons/si";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 20, rotate: -2 },
    visible: {
      opacity: 1, y: 0, rotate: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="footer-sketchbook"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Ripped/squiggly top edge separator */}
      <svg className="footer-top-edge" viewBox="0 0 1000 20" preserveAspectRatio="none">
        <path d="M 0,10 Q 50,20 100,10 T 200,10 T 300,10 T 400,10 T 500,10 T 600,10 T 700,10 T 800,10 T 900,10 T 1000,10" 
              fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
      </svg>

      {/* Background Doodles */}
      <div className="footer-bg-decorations">
        {/* Star */}
        <svg className="footer-doodle footer-star" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,10 L 60,40 L 90,45 L 65,65 L 75,95 L 50,75 L 25,95 L 35,65 L 10,45 L 40,40 Z" fill="none" stroke="var(--pencil)" strokeWidth="1.5" strokeOpacity="0.3" strokeLinejoin="round" />
        </svg>
        {/* Zigzag */}
        <svg className="footer-doodle footer-zigzag" viewBox="0 0 150 50" filter="url(#roughLine)">
          <path d="M 10,25 L 30,5 L 50,45 L 70,5 L 90,45 L 110,5 L 130,25" fill="none" stroke="var(--ballpoint)" strokeWidth="2" strokeOpacity="0.2" strokeLinejoin="round" />
        </svg>
        {/* Pluses */}
        <svg className="footer-doodle footer-pluses" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 20,20 L 40,40 M 40,20 L 20,40 M 70,60 L 90,80 M 90,60 L 70,80" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
        </svg>
        {/* Spiral */}
        <svg className="footer-doodle footer-spiral" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,50 m 0,-5 a 5,5 0 1,1 0,10 a 10,10 0 1,1 0,-20 a 15,15 0 1,1 0,30 a 20,20 0 1,1 0,-40" fill="none" stroke="var(--pencil)" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="footer-content-sketch">
        
        {/* Left Column: Socials and Tech Stack */}
        <motion.div className="footer-left-col" variants={itemVariants}>
          <div className="footer-branding">
            <h2 className="footer-signature">Dishank Patel</h2>
            <p className="footer-tagline">"Thanks for checking out my portfolio!"</p>
          </div>

          <div className="footer-icons-sketch">
            <a href={GITHUB_URL} className="sketch-icon-wrapper" target="_blank" rel="noopener noreferrer">
              <FaGithub className="sketch-icon" />
              <svg className="icon-hover-scribble" viewBox="0 0 50 50" filter="url(#roughLine)">
                <circle cx="25" cy="25" r="20" fill="none" stroke="var(--marker-red)" strokeWidth="3" />
              </svg>
            </a>
            <a href={LINKEDIN_URL} className="sketch-icon-wrapper" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="sketch-icon" />
              <svg className="icon-hover-scribble" viewBox="0 0 50 50" filter="url(#roughLine)">
                <circle cx="25" cy="25" r="20" fill="none" stroke="var(--ballpoint)" strokeWidth="3" />
              </svg>
            </a>
            <a href={EMAIL_URL} className="sketch-icon-wrapper" target="_blank" rel="noopener noreferrer">
              <SiGmail className="sketch-icon" />
              <svg className="icon-hover-scribble" viewBox="0 0 50 50" filter="url(#roughLine)">
                <circle cx="25" cy="25" r="20" fill="none" stroke="var(--highlighter)" strokeWidth="3" />
              </svg>
            </a>
          </div>

          <div className="footer-tech-sketch">
            <div className="tech-sketch-item">
              <span className="tech-text">Built with</span>
              <FaReact className="tech-icon-hand drawn-react" />
              <span className="tech-highlight">React</span>
            </div>
            <div className="tech-sketch-item">
              <span className="tech-text">Styled with</span>
              <FaCss3Alt className="tech-icon-hand drawn-css" />
              <span className="tech-highlight">CSS3</span>
            </div>
            <div className="tech-sketch-item">
              <span className="tech-text">Deployed on</span>
              <SiVercel className="tech-icon-hand drawn-vercel" />
              <span className="tech-highlight">Vercel</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Spotify polaroid taped card */}
        <motion.div className="footer-right-col" variants={itemVariants}>
          <div className="spotify-polaroid-card">
            {/* Rough border */}
            <svg className="polaroid-frame" width="100%" height="100%" preserveAspectRatio="none">
               <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="2" 
                     fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
               <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" rx="2" 
                     fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.5" filter="url(#roughLineAlt)" />
            </svg>
            
            {/* Washi tape pinning it down */}
            <svg className="polaroid-washi-tape" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--highlighter)" opacity="0.7" filter="url(#roughLine)" />
            </svg>

            <div className="polaroid-caption">Vibes while coding:</div>
            
            <div className="spotify-embed-container">
              {inView ? (
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                ></iframe>
              ) : (
                <div className="spotify-placeholder">Loading playlist...</div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="footer-bottom-sketch" variants={itemVariants}>
        <p>Copyright © {new Date().getFullYear()} Dishank Patel. All scribbles reserved.</p>
        <svg className="footer-bottom-doodle" viewBox="0 0 100 20" filter="url(#roughLine)">
          <path d="M 0,10 Q 25,0 50,10 T 100,10" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </motion.div>
    </motion.footer>
  );
}
