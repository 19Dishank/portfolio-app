import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import alpha1 from "../../assets/alpha1.png";
import alpha2 from "../../assets/alpha2.png";
import alpha3 from "../../assets/alpha3.png";
import alpha4 from "../../assets/alpha4.png";
import job1 from "../../assets/j1.png";
import job2 from "../../assets/j2.png";
import job3 from "../../assets/j3.png";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import dip1 from "../../assets/dip1.png";
import dip2 from "../../assets/dip2.png";
import dip3 from "../../assets/dip3.png";
import dip4 from "../../assets/dip4.png";
import dip5 from "../../assets/dip5.png"; 
import note1 from "../../assets/note1.png";
import note2 from "../../assets/note2.png";
import note3 from "../../assets/note3.png";
import note4 from "../../assets/note4.png";



export default function ProjectsSection() {
  const projects = [
    
    {
      title: "Portfolio Web App",
      description:
        "A modern React.js portfolio built with smooth scrolling, elegant UI, and mobile-first responsiveness. It features animated popups, and clean layout transitions for a seamless user experience — all designed to reflect a sleek, classy aesthetic.",
      image: p1,
      type: "Frontend Web-App",
      year: "2025",
      technologies: ["React.js", "CSS", "JavaScript (ES6+)"],
      screenshots: [
        p2,
        p4,
        p5,
      ],
      liveLink: "https://dishank-portfolio.vercel.app",
      codeLink: "https://github.com/19Dishank/portfolio-app",
    },
    {
      title: "DipThinq – AI Conversation Platform",
      description:
        "A modern AI chat platform built with React + Tailwind. Supports multiple AI agents (Creative, Code Assistant,Deep Thinker) and integrates multiple AI models via OpenRouter. Includes dark/light mode and fully responsive UI.",
      image: dip2,
      type: "Frontend Web-App",
      year: "2025",
      technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "OpenRouter API"],
      screenshots: [
        dip3,
        dip4,
        dip5,
       
      ],
      liveLink: "https://dipthinq.vercel.app",
      codeLink: "https://github.com/19Dishank/dipthinq",
    },
    {
      title: "AI Notes App – Smart Notes with AI",
      description:
        "A modern AI notes app built with React + Tailwind. It allows you to create, edit, and delete notes. It also allows you to search for notes and delete notes. It also allows you to create notes with AI. It also allows you to create notes with AI. It also allows you to create notes with AI.",
      image: note1,
      type: "Frontend Web-App",
      year: "2025",
      technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
      screenshots: [ note2, note3, note4],
      liveLink: "https://ai-notes-react.vercel.app",
      codeLink: "https://github.com/19Dishank/ai-notes-react",
    },
    {
      title: "AlphaArray - Online Study Platform",
      description:
        "AlphaArray is a PHP-based educational web application designed to empower learners, instructors, and institutions through an interactive and scalable online learning environment.",
      image: alpha1,
      type: "Web Application",
      year: "2024",
      technologies: ["HTML", "CSS", "MYSQL", "PHP", "JavaScript", "Bootstrap"],
      screenshots: [alpha2, alpha3, alpha4],
      liveLink: "#",
      codeLink: "https://github.com/19Dishank/alpha_array",
    },
    {
      title: "Jobify - Laravel-based Job Portal",
      description:
        "A full-featured Job Portal web application designed to connect job seekers with employers. The platform supports user registration, job postings, application tracking, and role-based access for administrators, recruiters, and job seekers.",
      image: job1,
      type: "Web Application",
      year: "2024",
      technologies: [
        "HTML",
        "CSS",
        "PHP-LARAVEL",
        "MySQL",
        "JavaScript",
        "Bootstrap",
      ],
      screenshots: [job2, job3],
      liveLink: "#",
      codeLink: "https://github.com/19Dishank/jobify-php",
    },
    {
      title: "SafePassage - Secure Vault App",
      description:
        "SafePassage is an Android app that helps users securely store and manage their credentials and documents. It includes PIN- based access, a password manager, credit card storage, a document vault, a password generator, and a password strength monitor.Designed with an easy - to - use interface and strong security to ensure a private, seamless experience.",
      image: app1,
      type: "Mobile App",
      year: "2025",
      technologies: ["XML", "Firebase", "Kotlin"],
      screenshots: [app1, app2],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [selectedProject]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const visibleCount = isMobile ? 1 : 3;
  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(index + i) % projects.length]);
  }

  // icons
  const IconClose = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
  const IconExternal = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 3H21V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 14L21 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M21 21H3V3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
  const IconCode = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M10 17L5 12L10 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14 17L19 12L14 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
  useEffect(() => {
    const images = document.querySelectorAll(".popup-zoom-image");

    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
    };

    images.forEach((img) => {
      img.addEventListener("mousemove", handleMove);
      img.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
      });
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mousemove", handleMove);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        minHeight: "100vh",
        paddingTop: "7rem",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "92%" : "85%",
        }}
      >
        {/* Left Button */}
        <button
          onClick={prevSlide}
          style={navBtn("left")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
          }
        >
          ❮
        </button>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "1rem" : "2rem",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={`${index}-${i}`}
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -18 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  flex: `0 0 ${isMobile ? "100%" : "30%"}`,
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.6)",
                  textAlign: "left",
                  color: "#fff",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.03)",
                  height: isMobile ? 450 : 420, // ✅ fixed height for uniform cards
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image container ensures same size */}
                <div
                  style={{
                    width: "100%",
                    height: "55%", // fixed ratio for consistent layout
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // ✅ auto adjust
                      display: "block",
                    }}
                  />
                </div>

                {/* Text section */}
                <div
                  style={{
                    padding: "1rem 1.2rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(0,191,166,0.12)",
                          color: "#00BFA6",
                          padding: "4px 8px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {project.type}
                      </span>
                      <span style={{ color: "#9aa0a6", fontSize: 13 }}>
                        {project.year}
                      </span>
                    </div>

                    <h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#cfcfcf",
                        lineHeight: 1.45,
                      }}
                    >
                      {project.description.slice(0, 90)}...
                    </p>
                  </div>

                  <span
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: "#00BFA6",
                      fontWeight: 600,
                      alignSelf: "flex-start",
                    }}
                  >
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          style={navBtn("right")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
          }
        >
          ❯
        </button>
      </div>

      {/* Popup Modal - Rendered via Portal to body */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.85)",
                backdropFilter: "blur(8px)",
                padding: "20px",
                overflow: "auto",
              }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedProject(null);
                }
              }}
              aria-modal="true"
              role="dialog"
            >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.36, ease: "easeOut" }}
              style={{
                width: "100%",
                maxWidth: 920,
                borderRadius: 16,
                background: "linear-gradient(180deg, #0b0b0b 0%, #111111 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                color: "#fff",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                maxHeight: "90vh",
                margin: "auto",
              }}
            >
              {/* Close Button - Fixed Position */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                aria-label="Close"
                style={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  border: "none",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  cursor: "pointer",
                  padding: "10px",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "rotate(90deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
              >
                <IconClose size={18} />
              </button>

              {/* Scrollable Content */}
              <div
                style={{
                  padding: "24px",
                  overflowY: "auto",
                  flex: 1,
                  minHeight: 0,
                }}
              >
              <style>
                {`
                  /* 📱 Mobile-only styling for project title layout */
                  @media (max-width: 768px) {
                    .project-title-row h2 {
                      display: flex !important;
                      flex-wrap: wrap !important;
                      align-items: center !important;
                      gap: 4px !important;
                      font-size: 18px !important;
                    }

                    /* Move the year after title (not affecting category) */
                    .project-title-row h2 span.year {
                      order: 2 !important; /* comes right after title */
                      margin-left: 6px !important;
                      color: #9aa0a6 !important;
                      font-size: 13px !important;
                    }

                    /* Keep category badge same position (order unchanged) */
                    .project-title-row h2 span.category {
                      order: 3 !important;
                    }
                  }
                `}
              </style>

              {/* Title Row */}
              <div
                className="project-title-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {selectedProject.title}
                  <span
                    className="category"
                    style={{
                      background: "#005f52",
                      color: "#dff9f2",
                      padding: "6px 10px",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  >
                    {selectedProject.type ||
                      selectedProject.category ||
                      "Project"}
                  </span>
                  <span
                    className="year"
                    style={{ color: "#9aa0a6", fontSize: 13 }}
                  >
                    {selectedProject.year}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div style={{ marginBottom: 18 }}>
                <h3
                  style={{ margin: "6px 0 8px", fontSize: 15, fontWeight: 700 }}
                >
                  Description
                </h3>
                <p style={{ margin: 0, color: "#cfcfcf", lineHeight: 1.6 }}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              {selectedProject.technologies?.length > 0 && (
                <div style={{ marginBottom: 18 }}>
                  <h3
                    style={{
                      margin: "6px 0 8px",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    Technologies
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {selectedProject.technologies.map((t, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.03)",
                          color: "#e6e6e6",
                          padding: "6px 10px",
                          borderRadius: 10,
                          fontSize: 13,
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {selectedProject.screenshots && (
                <div className="" style={{ marginBottom: 18 }}>
                  <h3
                    style={{
                      margin: "6px 0 10px",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    Screenshots
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      overflow: "visible",
                      gap: 12,
                    }}
                  >
                    {selectedProject.screenshots.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`screenshot-${i}`}
                        className="popup-zoom-image"
                        style={{
                          width: "100%",
                          height: 140,
                          objectFit: "cover",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.03)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              </div>

              {/* Actions - Always visible at bottom */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  padding: "20px 24px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(0,0,0,0.4)",
                  flexShrink: 0,
                }}
              >
                {selectedProject.liveLink && (
                  <a
                    href={
                      selectedProject.liveLink !== "#"
                        ? selectedProject.liveLink
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background:
                        selectedProject.liveLink !== "#"
                          ? "linear-gradient(90deg,#00bfa6,#00d6a0)"
                          : "#2a2a2a",
                      color:
                        selectedProject.liveLink !== "#" ? "#041412" : "#777",
                      padding: "10px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontWeight: 700,
                      boxShadow:
                        selectedProject.liveLink !== "#"
                          ? "0 6px 18px rgba(0,191,166,0.14)"
                          : "none",
                      pointerEvents:
                        selectedProject.liveLink !== "#" ? "auto" : "none",
                      cursor:
                        selectedProject.liveLink !== "#"
                          ? "pointer"
                          : "not-allowed",
                      transition: "0.3s",
                    }}
                  >
                    <IconExternal /> View Live Project
                  </a>
                )}

                {selectedProject.codeLink && (
                  <a
                    href={
                      selectedProject.codeLink !== "#"
                        ? selectedProject.codeLink
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "transparent",
                      color: selectedProject.codeLink !== "#" ? "#ddd" : "#777",
                      padding: "10px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      border:
                        selectedProject.codeLink !== "#"
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(255,255,255,0.1)",
                      fontWeight: 600,
                      pointerEvents:
                        selectedProject.codeLink !== "#" ? "auto" : "none",
                      cursor:
                        selectedProject.codeLink !== "#"
                          ? "pointer"
                          : "not-allowed",
                      transition: "0.3s",
                    }}
                  >
                    <IconCode /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </section>
  );
}

// reusable navigation button style
const navBtn = (side) => ({
  position: "absolute",
  [side]: "-1.5rem",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  color: "#fff",
  background: "rgba(255,255,255,0.06)",
  border: "none",
  fontSize: "1.6rem",
  cursor: "pointer",
  borderRadius: "50%",
  width: "44px",
  height: "44px",
  backdropFilter: "blur(6px)",
  transition: "all .18s",
});
