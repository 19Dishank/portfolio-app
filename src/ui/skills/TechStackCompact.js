import React, { memo, useEffect, useRef, useState } from "react";
import "./TechStackCompact.css";

const TechStackCompact = memo(function TechStackCompact({ skills = [] }) {
  const barRefs = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // CATEGORY FILTER
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(skills.map((s) => s.category).filter(Boolean)),
  ];

  // 👇 FIXED ESLINT WARNING — SAFE OBSERVER
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  // BAR ANIMATION
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        barRefs.current.forEach((ref, idx) => {
          if (ref && ref.dataset.expertise) {
            const expertise = parseInt(ref.dataset.expertise, 10);
            setTimeout(() => {
              if (ref) ref.style.width = `${expertise}%`;
            }, idx * 50);
          }
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, selectedCategory]);

  // FILTER DATA
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <div className="tech-compact-wrapper" ref={containerRef}>
      {/* CATEGORY FILTER */}
      <div className="tech-compact-filter">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`tech-filter-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SKILL GRID */}
      <div className="tech-compact-grid">
        {filteredSkills.map((skill, idx) => {
          const expertise = skill.expertise || 0;

          return (
            <div
              className="tech-compact-item"
              key={skill.name + idx}
              style={{ "--delay": `${idx * 0.05}s` }}
            >
              <div className="tech-compact-icon">{skill.icon || "⚡"}</div>

              <div className="tech-compact-content">
                <h4 className="tech-compact-name">{skill.name}</h4>

                {skill.category && (
                  <span className="tech-compact-category">
                    {skill.category}
                  </span>
                )}

                <div className="tech-compact-expertise">
                  <div className="tech-compact-expertise-bar-container">
                    <div
                      ref={(el) => (barRefs.current[idx] = el)}
                      className="tech-compact-expertise-bar"
                      data-expertise={expertise}
                      style={{ width: "0%" }}
                    >
                      <div className="tech-compact-expertise-bar-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="no-skill-msg">No skills found in this category</div>
        )}
      </div>
    </div>
  );
});

export default TechStackCompact;
