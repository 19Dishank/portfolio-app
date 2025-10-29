import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaReact, FaCss3Alt ,FaUser} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { User } from "lucide-react";    


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/19Dishank" className="icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dishank-patel-108718363/" className="icon"><FaLinkedin /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pateldishank19@gmail.com&su=Let's%20Collaborate&body=Hey%20Dishank%2C%20I%20checked%20your%20portfolio%20and%20wanted%20to%20connect!"  target="_blank" rel="noopener noreferrer" className="icon"><SiGmail /></a>
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
