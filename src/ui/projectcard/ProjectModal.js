import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Focus trap and escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Prevent scrolling on body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    // Initial focus to modal for accessibility
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
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
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "20px",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        ref={modalRef}
        tabIndex="-1"
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "var(--paper)",
          borderRadius: "8px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
          margin: "auto",
          color: "var(--ink)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          outline: "none",
        }}
      >
        {/* Double border for the modal */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            borderRadius: "8px",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="4"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2"
            filter="url(#roughLine)"
            vectorEffect="non-scaling-stroke"
          />
          <rect
            x="3"
            y="3"
            width="94"
            height="94"
            rx="4"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
            opacity="0.5"
            filter="url(#roughLineAlt)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Washi Tape at Top */}
        <svg
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%) rotate(-2deg)",
            width: "140px",
            height: "35px",
            zIndex: 10,
            opacity: 0.9,
          }}
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path d="M 2 4 Q 50 0 98 4 L 95 18 Q 50 15 5 18 Z" fill="var(--highlighter)" filter="url(#roughLine)" />
        </svg>

        {/* Random Modal Inner Doodles */}
        <svg
          style={{
            position: "absolute",
            top: "60px",
            right: "40px",
            width: "45px",
            height: "45px",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.2,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M 50 10 L 90 90 L 10 90 Z" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
        </svg>

        <svg
          style={{
            position: "absolute",
            bottom: "80px",
            left: "30px",
            width: "55px",
            height: "55px",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.2,
            transform: "rotate(15deg)",
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--pencil)" strokeWidth="3" filter="url(#roughLineAlt)" />
        </svg>

        <svg
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            width: "40px",
            height: "40px",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.2,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M 10 10 L 90 90 M 90 10 L 10 90" fill="none" stroke="var(--pencil)" strokeWidth="5" filter="url(#roughLine)" />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
            padding: "8px",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--ink)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: "rotate(4deg)" }}>
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#roughLine)"
            />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div
          style={{
            padding: "40px 32px 32px 32px",
            overflowY: "auto",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Title Row */}
          <h2
            id="modal-title"
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "3rem",
              fontWeight: 700,
              margin: "0 0 8px 0",
              lineHeight: 1.1,
              color: "var(--ink)",
              paddingRight: "40px",
            }}
          >
            {project.title}
          </h2>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
            {project.type && (
              <span
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: "1.2rem",
                  color: "var(--pencil)",
                }}
              >
                {project.type}
              </span>
            )}
            {project.year && (
              <span
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: "1.2rem",
                  color: "var(--pencil)",
                }}
              >
                • {project.year}
              </span>
            )}
          </div>

          <div style={{ borderTop: "1.5px dashed var(--pencil)", opacity: 0.6, margin: "0 0 24px 0" }} />

          {/* Description */}
          <div style={{ marginBottom: "32px" }}>
            <p
              style={{
                fontFamily: "Kalam, cursive",
                fontSize: "1.2rem",
                color: "var(--ink)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Details List (Inline Pills for Stack) */}
          {project.technologies && project.technologies.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: "1.4rem",
                  color: "var(--ink)",
                  margin: "0 0 12px 0",
                }}
              >
                Tech Stack:
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "Kalam, cursive",
                      fontSize: "1.1rem",
                      color: "var(--ink)",
                      background: "rgba(0,0,0,0.04)",
                      padding: "4px 12px",
                      borderRadius: "6px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {(project.liveLink || project.codeLink) && (
          <div
            style={{
              padding: "24px 32px",
              borderTop: "1.5px dashed var(--pencil)",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              zIndex: 1,
            }}
          >
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 24px",
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: "1.2rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--marker-red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ink)";
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    overflow: "visible",
                    transform: "rotate(-1deg)",
                  }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="96"
                    height="96"
                    rx="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    filter="url(#roughLine)"
                    vectorEffect="non-scaling-stroke"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="94"
                    height="94"
                    rx="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.5"
                    filter="url(#roughLineAlt)"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                View Live Project
              </a>
            )}

            {project.codeLink && project.codeLink !== "#" && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 24px",
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: "1.2rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--marker-red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ink)";
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    overflow: "visible",
                    transform: "rotate(1deg)",
                  }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="96"
                    height="96"
                    rx="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    filter="url(#roughLine)"
                    vectorEffect="non-scaling-stroke"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="94"
                    height="94"
                    rx="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.5"
                    filter="url(#roughLineAlt)"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                View Code
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;
