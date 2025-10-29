import React from "react";
import { MapPin, Mail, Code2, Monitor, Brain, Gamepad2, Award, Github, Linkedin } from "lucide-react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-subtitle">Let’s Connect</p>
          <h2 className="contact-title">Contact</h2>
          <p className="contact-text">
            Have a question or project in mind? Feel free to reach out — I’d love to collaborate.
          </p>

          <div className="contact-info">
  {/* Location */}
  <div className="info-item">
    <MapPin className="info-icon" />
    <span>Surat, Gujarat, India</span>
  </div>

  {/* Email */}
  <div className="info-item">
    <Mail className="info-icon" />
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pateldishank19@gmail.com"  target="_blank" rel="noopener noreferrer" className="info-link">
      <span>pateldishank19@gmail.com</span>
    </a>
  </div>

  {/* GitHub */}
  <div className="info-item">
    <Github className="info-icon" />
    <a
      href="https://github.com/19Dishank"
      target="_blank"
      rel="noopener noreferrer"
      className="info-link"
    >
      <span>19Dishank</span>
    </a>
  </div>

  {/* LinkedIn */}
  <div className="info-item">
    <Linkedin className="info-icon" />
    <a
      href="https://www.linkedin.com/in/dishank-patel-108718363/"
      target="_blank"
      rel="noopener noreferrer"
      className="info-link"
    >
      <span>Dishank Patel</span>
    </a>
  </div>
</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="certifications">
            <h3 className="section-heading">
              <Award className="section-icon" /> Certifications
            </h3>
            <ul>
              <li>
                <Award className="list-icon" /> Python Workshop — Shell
              </li>
              <li>
                <Award className="list-icon" /> Prompt Engineering Workshop — Rizwan Malek 
                <span className="org"> (Senior Developer, Narola Infotech)</span>
              </li>
            </ul>
          </div>

          <div className="hobbies">
            <h3 className="section-heading">
              <Brain className="section-icon" /> What I Like
            </h3>
            <ul>
              <li>
                <Code2 className="list-icon" /> Coding at midnight
              </li>
              <li>
                <Monitor className="list-icon" /> Designing clean UI & animations
              </li>
              <li>
                <Brain className="list-icon" /> Exploring AI tools & automation
              </li>
              <li>
                <Gamepad2 className="list-icon" /> Gaming & Video Editing
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
