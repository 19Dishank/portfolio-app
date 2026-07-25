import React, { useMemo } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index, onClick }) => {
  // Use index to create a deterministic pseudo-random rotation and offsets
  const rotation = useMemo(() => {
    const val = -1.5 + (index % 5) * 0.75; // Cycles through varying small rotations
    return val === 0 ? 0.8 : val; // Avoid perfect 0
  }, [index]);

  const translateY = useMemo(() => {
    return (index % 3) * 2 - 2; // -2, 0, 2
  }, [index]);

  const shortDesc = project.description
    ? project.description.split('. ')[0] + '.' // Get first sentence
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -18 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "relative",
        background: "var(--paper)",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Flex grow to fill carousel item
        minHeight: "320px",
        cursor: "pointer",
        color: "var(--ink)",
        transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
        transformOrigin: "center center",
        zIndex: 1,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Hand-drawn double borders via SVG - Drop shadow added behind paper */}
      <svg
        style={{
          position: "absolute",
          top: -2,
          left: -2,
          width: "calc(100% + 4px)",
          height: "calc(100% + 4px)",
          pointerEvents: "none",
          zIndex: -1,
          overflow: "visible",
        }}
      >
        <rect
          x="2"
          y="2"
          width="100%"
          height="100%"
          rx="4"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          filter="url(#roughLine)"
        />
        <rect
          x="3"
          y="4"
          width="100%"
          height="100%"
          rx="4"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          opacity="0.5"
          filter="url(#roughLineAlt)"
        />
        {/* Sketchy shadow underneath */}
        <rect
          x="8"
          y="12"
          width="100%"
          height="100%"
          rx="4"
          fill="url(#hatch)"
          opacity="0.6"
          filter="url(#roughPaper)"
        />
      </svg>

      {/* Random inner card doodles */}
      <svg
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "30px",
          height: "30px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.3,
        }}
        viewBox="0 0 100 100"
      >
        {index % 4 === 0 && (
          <path d="M 50 10 L 90 90 L 10 90 Z" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
        )}
        {index % 4 === 1 && (
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
        )}
        {index % 4 === 2 && (
          <path d="M 10 10 L 90 90 M 90 10 L 10 90" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
        )}
        {index % 4 === 3 && (
          <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50" fill="none" stroke="var(--pencil)" strokeWidth="4" filter="url(#roughLine)" />
        )}
      </svg>

      <div style={{ zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Title & Category Line */}
        <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <h3
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "2rem",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            {project.title}
          </h3>
          {project.type && (
            <span
              style={{
                fontFamily: "Patrick Hand, cursive",
                fontSize: "1.1rem",
                color: "var(--pencil)",
              }}
            >
              {project.type}
            </span>
          )}
        </div>

        {/* Notebook dashed divider directly under title line */}
        <div
          style={{
            borderTop: "1.5px dashed var(--pencil)",
            margin: "0 0 16px 0",
            opacity: 0.8,
            width: "100%",
          }}
        />

        {/* Spec Lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontFamily: "Kalam, cursive",
            fontSize: "1.1rem",
            marginBottom: "16px",
          }}
        >
          {project.year && (
            <div style={{ display: "flex", gap: "8px" }}>
              <strong style={{ color: "var(--marker-red)" }}>Year:</strong>
              <span style={{ color: "var(--ink)" }}>{project.year}</span>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <strong style={{ color: "var(--marker-red)" }}>Stack:</strong>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      color: "var(--ink)",
                      background: "rgba(0,0,0,0.04)",
                      padding: "2px 6px",
                      borderRadius: "4px"
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span style={{ color: "var(--pencil)", alignSelf: "center", fontSize: "0.9rem" }}>
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Project Tagline / Short Desc to fill space */}
        {/* <div style={{ flex: 1, marginBottom: "20px" }}>
          {shortDesc && (
            <p style={{ 
              fontFamily: "Patrick Hand, cursive", 
              fontSize: "1.1rem", 
              color: "var(--pencil)", 
              margin: 0,
              lineHeight: 1.4
            }}>
              {shortDesc}
            </p>
          )}
        </div> */}

        {/* Sketched Button */}
        <div style={{ alignSelf: "flex-start", position: "relative", zIndex: 2, marginTop: "auto" }}>
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 16px",
              fontFamily: "Patrick Hand, cursive",
              fontSize: "1.15rem",
              color: "var(--ink)",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--marker-red)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            {/* Real SVG Stroke Button with double overlapping wobbly lines */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                overflow: "visible",
                transform: `rotate(${rotation > 0 ? -1 : 1}deg)`, // Counter-rotate slightly
              }}
            >
              <rect
                x="2"
                y="2"
                width="calc(100% - 4px)"
                height="calc(100% - 4px)"
                rx="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                filter="url(#roughLine)"
              />
              <rect
                x="3"
                y="1"
                width="calc(100% - 6px)"
                height="calc(100% - 2px)"
                rx="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
                filter="url(#roughLineAlt)"
              />
            </svg>
            View details &rarr;
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
