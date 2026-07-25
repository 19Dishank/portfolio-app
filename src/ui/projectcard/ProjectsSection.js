import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsSection = memo(function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedProject, setSelectedProject] = useState(null);

  // Responsive breakpoint handling
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const visibleCount = windowWidth < 768 ? 1 : windowWidth < 1200 ? 2 : 3;

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Keyboard accessibility for Carousel
  useEffect(() => {
    if (selectedProject) return; // Disable carousel keyboard nav when modal is open

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, nextSlide, prevSlide]);

  // Handle swipe gestures
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) {
      nextSlide();
    } else if (swipe > 50) {
      prevSlide();
    }
  };

  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(index + i) % projects.length]);
  }

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "2rem 20px 4rem", // Reduced top padding
        backgroundColor: "transparent", // Inherits the paper background from App.js/body
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden", // Prevent horizontal scroll
        color: "var(--ink)",
      }}
    >
      {/* Background Decorative Doodles */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "hidden" }} aria-hidden="true">
        <svg viewBox="0 0 1000 800" preserveAspectRatio="none" style={{ position: "absolute", top: "10%", left: "-10%", width: "120%", height: "80%", opacity: 0.15 }}>
          <path d="M 100,100 C 400,-100 800,200 900,500 C 950,800 500,900 200,700 C -100,500 100,200 400,300 C 700,400 700,700 400,750" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
        </svg>
        <svg viewBox="0 0 100 100" style={{ position: "absolute", top: "15%", left: "5%", width: "100px", height: "100px", opacity: 0.4 }}>
          <path d="M 50 50 C 50 20, 80 20, 80 50 C 80 80, 20 80, 20 50 C 20 10, 90 10, 90 50" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
        </svg>
        <svg viewBox="0 0 100 100" style={{ position: "absolute", top: "20%", right: "8%", width: "80px", height: "80px", opacity: 0.4 }}>
          <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 20 20 L 80 80 M 20 80 L 80 20" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
        </svg>
        <svg viewBox="0 0 100 30" style={{ position: "absolute", bottom: "15%", left: "10%", width: "120px", height: "40px", opacity: 0.4 }}>
          <path d="M 5 25 L 20 5 L 35 25 L 50 5 L 65 25 L 80 5 L 95 25" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
        </svg>
        <svg viewBox="0 0 100 100" style={{ position: "absolute", bottom: "20%", right: "10%", width: "100px", height: "100px", opacity: 0.4 }}>
          <circle cx="35" cy="45" r="25" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" />
          <circle cx="70" cy="70" r="15" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLineAlt)" />
        </svg>
      </div>

      {/* Hand-drawn section marker instead of plain heading */}
      <div style={{ marginBottom: "2.5rem", position: "relative", textAlign: "center", zIndex: 1 }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <h2
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 700,
              margin: 0,
              color: "var(--ink)",
              position: "relative",
              zIndex: 2,
            }}
          >
            Unfolding My Work
          </h2>
          {/* Highlighter stroke behind title */}
          <svg
            style={{
              position: "absolute",
              bottom: "10px",
              left: "-10%",
              width: "120%",
              height: "30px",
              zIndex: 1,
              pointerEvents: "none",
            }}
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
          >
            <path
              d="M 5,20 Q 50,10 95,25"
              fill="none"
              stroke="var(--highlighter)"
              strokeWidth="15"
              opacity="0.6"
              filter="url(#roughLine)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <p
          style={{
            fontFamily: "Patrick Hand, cursive",
            fontSize: "1.5rem",
            color: "var(--pencil)",
            margin: "0.5rem 0 0 0",
          }}
        >
          Every project, a page worth flipping to.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
          }}
        >
          {/* Left Arrow */}
          {windowWidth >= 768 && (
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              style={navBtnStyle(-2)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#roughLine)"
                />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <motion.div
            drag={windowWidth < 768 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              display: "flex",
              gap: windowWidth < 768 ? "1rem" : "2rem",
              justifyContent: "center",
              alignItems: "stretch", // Ensures cards are same height
              flex: 1,
              width: "100%",
              minHeight: "320px",
            }}
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => {
                // Determine actual project index to maintain stable rotation seed
                const actualIndex = projects.findIndex(p => p.title === project.title && p.description === project.description);
                return (
                  <motion.div
                    key={`${actualIndex}-${index}`}
                    style={{
                      flex: `0 0 ${windowWidth < 768 ? "100%" : windowWidth < 1200 ? "48%" : "30%"}`,
                      maxWidth: windowWidth < 768 ? "100%" : windowWidth < 1200 ? "48%" : "30%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ProjectCard
                      project={project}
                      index={actualIndex}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Right Arrow */}
          {windowWidth >= 768 && (
            <button
              onClick={nextSlide}
              aria-label="Next project"
              style={navBtnStyle(2)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#roughLine)"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Position Indicator & Mobile Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "3rem",
          }}
        >
          {windowWidth < 768 && (
            <button onClick={prevSlide} aria-label="Previous" style={mobileNavBtnStyle()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" filter="url(#roughLine)" />
              </svg>
            </button>
          )}

          <div style={{ display: "flex", gap: "8px" }}>
            {projects.map((_, i) => (
              <div
                key={i}
                style={{
                  width: "12px",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: i === index ? "var(--marker-red)" : "var(--pencil)",
                  opacity: i === index ? 1 : 0.4,
                  transition: "background-color 0.3s ease, opacity 0.3s ease",
                  transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
                }}
              />
            ))}
          </div>

          {windowWidth < 768 && (
            <button onClick={nextSlide} aria-label="Next" style={mobileNavBtnStyle()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" filter="url(#roughLine)" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
});

export default ProjectsSection;

const navBtnStyle = (rotation) => ({
  background: "none",
  border: "none",
  color: "var(--ink)",
  cursor: "pointer",
  padding: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: `rotate(${rotation}deg)`,
  transition: "transform 0.2s ease, color 0.2s ease",
});

const mobileNavBtnStyle = () => ({
  background: "none",
  border: "none",
  color: "var(--ink)",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
