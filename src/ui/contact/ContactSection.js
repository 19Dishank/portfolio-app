import React from "react";
import {
  MapPin,
  Mail,
  Code2,
  Monitor,
  Brain,
  Gamepad2,
  Award,
  Github,
  Linkedin,
  GraduationCap,
  BookOpen,
  School,
  University,
} from "lucide-react";
import "./ContactSection.css";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL;
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL;

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-subtitle">Let’s Connect</p>
          <h2 className="contact-title">Contact</h2>
          <p className="contact-text">
            Have a question or project in mind? Feel free to reach out — I’d
            love to collaborate.
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
              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <span>pateldishank19@gmail.com</span>
              </a>
            </div>

            {/* GitHub */}
            <div className="info-item">
              <Github className="info-icon" />
              <a
                href={GITHUB_URL}
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
                href={LINKEDIN_URL}
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
                <Award className="list-icon" /> Prompt Engineering Workshop —
                Rizwan Malek
                <span className="org">
                  {" "}
                  (Senior Developer, Narola Infotech)
                </span>
              </li>
            </ul>
          </div>

          <div className="hobbies">
            <h3 className="section-heading">
              <GraduationCap className="section-icon" /> Education
            </h3>
            <ul>
              <li>
                <School className="list-icon" /> SSC
                <span className="org">
                  {" "}
                  (Sanskar Bharti Vidyalaya, 2019)
                </span>
              </li>
              <li>
                <BookOpen className="list-icon" /> HSC
                <span className="org">
                  {" "}
                  (Sanskar Bharti Vidyalaya, 2021)
                </span>
              </li>
              <li>
                <GraduationCap className="list-icon" /> Bachelor of computer application
                <span className="org">
                  {" "}
                  (Veer Narmad South Gujarat University, 2024)
                </span>
              </li>
              <li>
                <University className="list-icon" /> Master of computer application
                <span className="org">
                  {" "}
                  (Sarvajanik University, 2026)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
