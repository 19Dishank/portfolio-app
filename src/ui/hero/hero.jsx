import React from "react";
import "./hero.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../../constants";

const Hero = () => {
  return (
    <section className="hero-section">

      {/* Background Decorative Doodles (Positioned via CSS) */}
      <div className="hero-bg-decorations" aria-hidden="true">
        {/* Large faint background swirls (original) */}
        <svg className="hero-bg-doodle" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <path d="M 100,100 C 400,-100 800,200 900,500 C 950,800 500,900 200,700 C -100,500 100,200 400,300 C 700,400 700,700 400,750" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.15" filter="url(#roughLine)" />
          <path d="M 120,120 C 380,-80 780,220 880,520 C 930,820 480,920 180,720 C -80,520 120,220 380,320 C 680,420 680,720 380,770" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.1" filter="url(#roughLineAlt)" />
        </svg>

        {/* Top Left - Spiral */}
        <svg className="bg-decor bg-spiral" viewBox="0 0 100 100">
          <path d="M 50 50 C 50 20, 80 20, 80 50 C 80 80, 20 80, 20 50 C 20 10, 90 10, 90 50" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <path d="M 52 52 C 52 22, 78 22, 78 52 C 78 78, 22 78, 22 52 C 22 12, 88 12, 88 52" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Top Right - Plus Signs */}
        <svg className="bg-decor bg-pluses" viewBox="0 0 100 100">
          <path d="M 20 10 L 20 30 M 10 20 L 30 20 M 70 40 L 70 60 M 60 50 L 80 50 M 40 80 L 40 100 M 30 90 L 50 90" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <path d="M 21 11 L 21 31 M 11 21 L 31 21 M 71 41 L 71 61 M 61 51 L 81 51 M 41 81 L 41 101 M 31 91 L 51 91" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Top Middle - Zig Zag */}
        <svg className="bg-decor bg-zigzag" viewBox="0 0 100 30">
          <path d="M 5 25 L 20 5 L 35 25 L 50 5 L 65 25 L 80 5 L 95 25" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <path d="M 5 27 L 20 7 L 35 27 L 50 7 L 65 27 L 80 7 L 95 27" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Mid Left - Triangle */}
        <svg className="bg-decor bg-triangle" viewBox="0 0 100 100">
          <path d="M 50 10 L 90 90 L 10 90 Z" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <path d="M 50 13 L 87 87 L 13 87 Z" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Bottom Left - Squiggle/Spring */}
        <svg className="bg-decor bg-spring" viewBox="0 0 100 100">
          <path d="M 10 90 C 30 90, 20 10, 50 10 C 80 10, 70 90, 90 90" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <path d="M 12 90 C 32 90, 22 10, 52 10 C 82 10, 72 90, 92 90" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Bottom Middle - Cross/Asterisk */}
        <svg className="bg-decor bg-asterisk" viewBox="0 0 100 100">
          <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 20 20 L 80 80 M 20 80 L 80 20" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
        </svg>

        {/* Bottom Right - Double Irregular Circles */}
        <svg className="bg-decor bg-circles" viewBox="0 0 100 100">
          <circle cx="35" cy="45" r="25" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" />
          <circle cx="70" cy="70" r="15" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLineAlt)" />
        </svg>
      </div>

      <div className="sketch-page">
        {/* Thin Double-stroke Page Border */}
        <svg className="sketch-page-border" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 1 2 Q 50 1 99 2 L 98 98 Q 50 99 2 98 Z" fill="none" stroke="var(--ink)" strokeWidth="1.5" opacity="0.8" filter="url(#roughLine)" />
          <path d="M 2 1 Q 50 2 98 1 L 99 99 Q 50 98 1 99 Z" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" />
        </svg>

        {/* Ring holes down the left edge (hidden on mobile) */}
        <div className="ring-holes" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="hole" />
          ))}
        </div>

        {/* Random Floating Star Doodles inside page */}
        <svg className="hero-star-small doodle-1" viewBox="0 0 30 30">
          <path d="M15,2 L18,10 L28,10 L20,16 L23,26 L15,20 L7,26 L10,16 L2,10 L12,10 Z" fill="none" stroke="var(--ballpoint)" strokeWidth="1.5" opacity="0.6" filter="url(#roughLine)" strokeLinejoin="round" />
        </svg>
        <svg className="hero-star-small doodle-2" viewBox="0 0 30 30">
          <path d="M15,2 L18,10 L28,10 L20,16 L23,26 L15,20 L7,26 L10,16 L2,10 L12,10 Z" fill="none" stroke="var(--marker-red)" strokeWidth="1.5" opacity="0.5" filter="url(#roughLine)" strokeLinejoin="round" />
        </svg>

        <div className="sketch-grid">
          {/* Inner Card Doodles (Behind Text) */}
          <div className="card-inner-doodles" aria-hidden="true">
            <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" className="inner-doodle-svg">
              <path d="M 100 50 Q 300 150 500 50 T 900 150" fill="none" stroke="var(--pencil)" strokeWidth="2" opacity="0.15" filter="url(#roughLine)"/>
              <path d="M -50 400 C 200 250, 400 550, 800 350" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.15" filter="url(#roughLineAlt)"/>
              <circle cx="850" cy="80" r="40" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.15" filter="url(#roughLine)" />
              <rect x="150" y="250" width="60" height="60" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.15" transform="rotate(15 180 280)" filter="url(#roughLine)" />
              <path d="M 400 450 L 420 450 M 410 440 L 410 460" stroke="var(--pencil)" strokeWidth="2" opacity="0.2" filter="url(#roughLine)" />
              <path d="M 200 80 Q 220 60 210 90 T 230 70" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.15" filter="url(#roughLine)"/>
            </svg>
          </div>

          {/* Left Block: Copy & Actions */}
          <div className="hero-copy-block">
            <p className="hero-eyebrow">Hi, my name is</p>
            <h1 className="hero-title">
              Dishank
              <span className="hero-highlight">
                Patel
                <svg className="hero-highlighter-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 2 12 Q 50 5 98 10 Q 50 20 2 12" fill="var(--highlighter)" opacity="0.6" filter="url(#roughLine)" />
                  <path d="M 0 10 Q 50 8 100 8 Q 50 18 0 10" fill="var(--highlighter)" opacity="0.4" filter="url(#roughLineAlt)" />
                </svg>
              </span>
            </h1>

            <h2 className="hero-subtitle">
              I build elegant UI
              <span className="hero-underline">
                & fast web apps
                <svg className="hero-underline-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 0 15 Q 50 5 100 15" fill="none" stroke="var(--marker-red)" strokeWidth="1.5" filter="url(#roughLine)" />
                  <path d="M 2 18 Q 50 8 98 18" fill="none" stroke="var(--marker-red)" strokeWidth="1" opacity="0.4" filter="url(#roughLineAlt)" />
                </svg>
              </span>
            </h2>

            <p className="hero-body">
              I’m a graduated Software Engineer specializing in Frontend Development
              and React. I love designing and building clean, responsive user interfaces
              that feel fast and enjoyable to use.
            </p>

            <div className="hero-actions">
              <button
                className="hero-btn primary-btn"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg className="hero-btn-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 5 10 C 15 5, 85 8, 95 12 C 98 40, 96 70, 92 88 C 75 95, 25 93, 10 90 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" opacity="0.9" filter="url(#roughLine)" className="hero-btn-shape" />
                  <path d="M 7 12 C 13 7, 83 10, 93 14 C 96 42, 94 72, 90 90 C 73 97, 27 95, 12 92 Z" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.3" filter="url(#roughLineAlt)" className="hero-btn-shape-alt" />
                </svg>
                <span className="hero-btn-text">See my work</span>
              </button>

              <button
                className="hero-btn secondary-btn"
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg className="hero-btn-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 10 15 Q 50 5, 90 10 T 95 85 Q 50 95, 5 90 T 10 15 Z" fill="none" stroke="var(--pencil)" strokeWidth="1.5" strokeDasharray="4,4" filter="url(#roughLine)" className="hero-btn-shape" />
                  <path d="M 12 17 Q 52 7, 88 12 T 93 83 Q 52 93, 7 88 T 12 17 Z" fill="none" stroke="var(--pencil)" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" filter="url(#roughLineAlt)" />
                </svg>
                <span className="hero-btn-text">Contact me</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-btn secondary-btn resume-link"
              >
                <svg className="hero-btn-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 8 10 Q 45 15, 92 12 T 88 88 Q 50 82, 12 90 T 8 10 Z" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" className="hero-btn-shape" />
                  <path d="M 10 12 Q 47 17, 90 14 T 86 86 Q 48 84, 14 88 T 10 12 Z" fill="none" stroke="var(--pencil)" strokeWidth="1" opacity="0.4" filter="url(#roughLineAlt)" />
                </svg>
                <span className="hero-btn-text">Resume</span>
              </a>
            </div>
          </div>

          {/* Right Block: Portrait & Sticky Note */}
          <div className="hero-portrait-block">
            {/* Hand-drawn Portrait SVG with Frame */}
            <div className="portrait-container">
              <svg className="hero-portrait-svg" viewBox="-10 -10 220 220" overflow="visible">
                {/* Sketched Frame Background */}
                <path d="M 5 5 L 195 10 L 190 195 L 10 190 Z" fill="var(--paper-2)" stroke="none" />

                {/* Creative Frame Borders (overshooting lines) */}
                {/* Horizontal lines */}
                <path d="M -10 10 L 210 15" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
                <path d="M -10 190 L 210 185" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
                {/* Vertical lines */}
                <path d="M 10 -10 L 15 210" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
                <path d="M 190 -10 L 185 210" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />

                {/* Inner Photo Frame */}
                <path d="M 25 25 L 175 22 L 172 155 L 28 158 Z" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.6" filter="url(#roughLineAlt)" />

                {/* Hair/Head contour (scaled slightly down to fit frame) */}
                <g transform="translate(0, 10) scale(0.95)">
                  <path d="M 60 80 C 60 40, 140 40, 140 80 C 145 110, 130 130, 100 135 C 70 130, 55 110, 60 80 Z" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
                  <path d="M 62 82 C 62 42, 138 42, 138 82 C 143 112, 128 128, 100 133 C 72 128, 57 112, 62 82 Z" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.4" filter="url(#roughLineAlt)" />

                  <path d="M 55 70 C 65 30, 100 30, 145 70 C 130 20, 70 20, 55 70" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />

                  <path d="M 40 190 C 50 140, 150 140, 160 190" fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughLine)" />
                  <path d="M 42 192 C 52 142, 148 142, 158 192" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.4" filter="url(#roughLineAlt)" />

                  <path d="M 80 135 C 90 150, 110 150, 120 135 C 120 160, 80 160, 80 135 Z" fill="url(#hatch)" opacity="0.6" filter="url(#roughLine)" />
                </g>
              </svg>

              {/* Floating words decoration */}
              <div className="floating-word word-1">React</div>
              <div className="floating-word word-2">JS</div>
              <div className="floating-word word-3">
                Tailwind
                <svg className="word-circle" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M 5 20 C 10 5, 90 5, 95 20 C 100 35, 10 35, 5 20" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
                </svg>
              </div>
              <div className="floating-word word-4">CSS3</div>
              <div className="floating-word word-5">TS</div>
              <div className="floating-word word-6">Next</div>

              {/* Sticky Note */}
              <div className="hero-sticky-note">
                {/* Tape */}
                <svg className="washi-tape" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 10 2 L 90 2 L 92 18 L 8 18 Z" fill="#e8d473" opacity="0.9" filter="url(#roughLine)" />
                </svg>

                {/* Note Background */}
                <svg className="sticky-bg" viewBox="0 0 200 60" preserveAspectRatio="none">
                  {/* Solid offset drop shadow */}
                  <path d="M 8 12 L 198 8 L 195 62 L 10 60 Z" fill="rgba(0,0,0,0.06)" filter="url(#roughLine)" />
                  {/* Solid yellow paper without borders */}
                  <path d="M 2 5 L 196 3 L 193 57 L 5 55 Z" fill="#f3e496" filter="url(#roughLine)" />
                </svg>

                <span className="sticky-text">Frontend Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <aside className="hero-margin-notes">
        <a href={GITHUB_URL} className="hero-social-note" aria-label="GitHub" target="_blank" rel="noreferrer">
          <FaGithub /> <span className="hero-social-text">GitHub</span>
        </a>
        <a href={LINKEDIN_URL} className="hero-social-note" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <FaLinkedin /> <span className="hero-social-text">LinkedIn</span>
        </a>
        <a href={EMAIL_URL} className="hero-social-note" aria-label="Email" target="_blank" rel="noreferrer">
          <FaEnvelope /> <span className="hero-social-text">Email</span>
        </a>
      </aside>
    </section>
  );
};

export default Hero;
