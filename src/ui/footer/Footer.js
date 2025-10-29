import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { User } from "lucide-react";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL;
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href={GITHUB_URL} className="icon">
            <FaGithub />
          </a>
          <a href={LINKEDIN_URL} className="icon">
            <FaLinkedin />
          </a>
          <a
            href={EMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <SiGmail />
          </a>
        </div>

        {/* <div className="footer-likes">
          <button className="like-btn">
            <FaHeart className="heart-icon" /> 2412 Likes
          </button>
        </div> */}

        <div className="footer-tech">
          <div className="tech-item">
            <span>Built with</span>
            <FaReact className="tech-icon react" />
            <span>React</span>
          </div>

          <div className="tech-item">
            <span>Styled with</span>
            <FaCss3Alt className="tech-icon css" />
            <span>CSS3</span>
          </div>
          <div className="tech-item">
            <span>Build by</span>
            <User className=" user" />
            <span>Dishank</span>
          </div>
          <div className="tech-item">
            <span>Deployed on</span>
            <SiVercel className="tech-icon vercel" />
            <span>Vercel</span>
          </div>
        </div>

        <div className="footer-spotify">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
            width="280"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Dishank Patel. All rights reserved.</p>
      </div>
    </footer>
  );
}
