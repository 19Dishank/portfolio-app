import React, { memo, useEffect, useRef, useState } from "react";
import "./TechStackCompact.css";

const TechStackCompact = memo(function TechStackCompact({ skills = [] }) {
  const barRefs = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Use Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Wait for fade-up animation to complete, then animate bars
    if (isVisible) {
      const timer = setTimeout(() => {
        barRefs.current.forEach((ref, idx) => {
          if (ref && ref.dataset.expertise) {
            const expertise = parseInt(ref.dataset.expertise, 10);
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
              setTimeout(() => {
                if (ref) {
                  // Use transform for better performance
                  ref.style.width = `${expertise}%`;
                }
              }, idx * 60); // Reduced stagger delay for faster animation
            });
          }
        });
      }, 800); // Reduced wait time for faster start

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="tech-compact-wrapper" ref={containerRef}>
      <div className="tech-compact-grid">
        {skills.map((skill, idx) => {
          const expertise = skill.expertise || 0;
          return (
            <div
              className="tech-compact-item"
              key={idx}
              style={{ "--delay": `${idx * 0.05}s` }}
            >
              <div className="tech-compact-icon">{skill.icon || "⚡"}</div>
              <div className="tech-compact-content">
                <h4 className="tech-compact-name">{skill.name}</h4>
                {skill.category && (
                  <span className="tech-compact-category">{skill.category}</span>
                )}
                {/* Expertise Level Bar */}
                <div className="tech-compact-expertise">
                  <div className="tech-compact-expertise-bar-container">
                    <div
                      ref={(el) => {
                        if (el) {
                          barRefs.current[idx] = el;
                        }
                      }}
                      className="tech-compact-expertise-bar"
                      data-expertise={expertise}
                      style={{ width: "0%" }}
                    >
                      <div className="tech-compact-expertise-bar-fill"></div>
                    </div>
                  </div>
                  <div className="tech-compact-expertise-label">
                    {/* <span className="expertise-text">{expertise}%</span> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TechStackCompact;

