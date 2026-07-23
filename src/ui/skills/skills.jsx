import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECH_SKILLS } from "../../constants";
import "./skills.css";

gsap.registerPlugin(ScrollTrigger);

// Helper for generating slight random rotations and offsets for cards
const getUnevenStyles = (seed) => {
  const random1 = Math.sin(seed) * 10000;
  const random2 = Math.cos(seed) * 10000;
  const rotation = (random1 - Math.floor(random1)) * 5 - 2.5; // -2.5 to 2.5 deg
  const yOffset = (random2 - Math.floor(random2)) * 12 - 6; // -6px to 6px
  const xOffset = (random1 - Math.floor(random1)) * 8 - 4; // -4px to 4px
  
  return {
    transform: `rotate(${rotation}deg) translate(${xOffset}px, ${yOffset}px)`
  };
};

// Clean hand-drawn star component (removed heavy filters to prevent messiness on small icons)
const Star = ({ filled }) => {
  return (
    <svg 
      className="skill-star" 
      viewBox="0 0 24 24" 
    >
      <path 
        d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.5-6.3-4.8-6.3 4.8 2.3-7.5-6-4.6h7.6z" 
        fill={filled ? "var(--marker-red)" : "transparent"} 
        stroke={filled ? "none" : "var(--pencil)"} 
        strokeWidth={filled ? "0" : "1.5"}
        strokeLinejoin="round"
        style={{ opacity: filled ? 0.85 : 0.4 }}
      />
    </svg>
  );
};

function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const filtersRef = useRef(null);

  // Clear refs on each render
  cardsRef.current = [];

  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const categories = useMemo(() => {
    return [...new Set(TECH_SKILLS.map((s) => s.category).filter(Boolean)), "Leveling Up"];
  }, []);

  const { mainSkills, learningSkills } = useMemo(() => {
    const activeSkills = selectedCategory === "Leveling Up"
      ? TECH_SKILLS.filter((s) => s.expertise <= 60)
      : TECH_SKILLS.filter((s) => s.category === selectedCategory);

    return {
      mainSkills: activeSkills.filter(s => s.expertise > 60),
      learningSkills: activeSkills.filter(s => s.expertise <= 60)
    };
  }, [selectedCategory]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (filtersRef.current) {
        tl.from(
          filtersRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.killTweensOf(cardsRef.current);
      
      gsap.fromTo(
        cardsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.2)",
          clearProps: "y,opacity",
        }
      );
    });

    return () => ctx.revert();
  }, [selectedCategory, mainSkills, learningSkills]);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      
      {/* Big Drawings on Background */}
      <div className="skills-bg-decorations">
        {/* Spiral top left */}
        <svg className="bg-doodle skills-bg-spiral" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,50 m 0,-5 a 5,5 0 1,1 0,10 a 10,10 0 1,1 0,-20 a 15,15 0 1,1 0,30 a 20,20 0 1,1 0,-40 a 25,25 0 1,1 0,50 a 30,30 0 1,1 0,-60" fill="none" stroke="var(--pencil)" strokeWidth="2" strokeOpacity="0.4" />
        </svg>
        
        {/* Pluses top right */}
        <svg className="bg-doodle skills-bg-pluses" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 20,10 L 20,30 M 10,20 L 30,20 M 70,30 L 70,50 M 60,40 L 80,40 M 30,70 L 30,90 M 20,80 L 40,80" fill="none" stroke="var(--ballpoint)" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>

        {/* Zigzag bottom left */}
        <svg className="bg-doodle skills-bg-zigzag" viewBox="0 0 100 50" filter="url(#roughLine)">
          <path d="M 10,25 L 25,10 L 40,40 L 55,10 L 70,40 L 85,25" fill="none" stroke="var(--pencil)" strokeWidth="3" strokeOpacity="0.3" strokeLinejoin="round" />
        </svg>

        {/* Concentric circles bottom right */}
        <svg className="bg-doodle skills-bg-circles" viewBox="0 0 100 100" filter="url(#roughLine)">
          <circle cx="50" cy="50" r="15" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeOpacity="0.3" />
        </svg>
        
        {/* Asterisk top middle */}
        <svg className="bg-doodle skills-bg-asterisk" viewBox="0 0 50 50" filter="url(#roughLine)">
          <path d="M 25,5 L 25,45 M 5,25 L 45,25 M 10,10 L 40,40 M 10,40 L 40,10" fill="none" stroke="var(--pencil)" strokeWidth="3" strokeOpacity="0.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="skills-sketch-page">
        {/* Double border for the sketch page */}
        <svg className="skills-page-border" width="100%" height="100%" preserveAspectRatio="none">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughPaper)" />
          <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1" strokeOpacity="0.4" filter="url(#roughLine)" />
        </svg>

        {/* Small inner drawings */}
        <div className="skills-inner-doodles">
          <svg className="inner-doodle-1" viewBox="0 0 60 60" filter="url(#roughLine)">
            <path d="M 10,10 C 20,30 40,5 50,20 C 60,35 30,50 20,40" fill="none" stroke="var(--pencil)" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
          
          <svg className="inner-doodle-2" viewBox="0 0 40 40" filter="url(#roughLine)">
            <path d="M 20,5 L 25,15 L 35,15 L 27,22 L 30,32 L 20,26 L 10,32 L 13,22 L 5,15 L 15,15 Z" fill="none" stroke="var(--ballpoint)" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round" />
          </svg>
          
          <svg className="inner-doodle-3" viewBox="0 0 30 30" filter="url(#roughLine)">
            <path d="M 15,5 L 15,25 M 5,15 L 25,15" fill="none" stroke="var(--marker-red)" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
          </svg>

          <svg className="inner-doodle-4" viewBox="0 0 30 60" filter="url(#roughLine)">
            <path d="M 15,5 Q 30,10 15,20 Q 0,30 15,40 Q 30,50 15,55" fill="none" stroke="var(--pencil)" strokeWidth="1.5" strokeOpacity="0.4" />
          </svg>

          <svg className="inner-doodle-5" viewBox="0 0 40 40" filter="url(#roughLine)">
            <circle cx="10" cy="10" r="3" fill="var(--marker-red)" opacity="0.6" />
            <circle cx="25" cy="5" r="2" fill="var(--pencil)" opacity="0.4" />
            <circle cx="20" cy="25" r="4" fill="var(--ballpoint)" opacity="0.5" />
          </svg>

          <svg className="inner-doodle-6" viewBox="0 0 50 50" filter="url(#roughLine)">
            <path d="M 5,5 Q 25,25 45,45 M 45,45 L 35,45 M 45,45 L 45,35" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Ring holes */}
        <div className="skills-ring-holes">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="hole"></div>
          ))}
        </div>

        <div className="skills-header" ref={titleRef}>
          <h2 className="skills-title">
            Sketchbook of Skills
          </h2>
          <p className="skills-subtitle">
            Everything I've learned so far — some pages are still being <span className="highlight-wrapper">filled in<svg className="skills-subtitle-highlight" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M 2,12 Q 50,5 98,15" fill="none" stroke="var(--highlighter)" strokeWidth="12" strokeOpacity="0.6" filter="url(#roughLine)" />
            </svg></span>.
          </p>
          
          <svg className="skills-doodle skills-doodle-arrow" viewBox="0 0 50 50">
            <path d="M 10,40 Q 25,10 40,30" fill="none" stroke="var(--ballpoint)" strokeWidth="2" filter="url(#roughLine)" />
            <path d="M 30,25 L 40,30 L 35,40" fill="none" stroke="var(--ballpoint)" strokeWidth="2" filter="url(#roughLine)" />
          </svg>
        </div>

        <div className="skills-filter-container" ref={filtersRef}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {selectedCategory === cat && (
                <svg className="filter-btn-outline" width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="20" 
                        fill="none" stroke="var(--marker-red)" strokeWidth="2" filter="url(#roughLine)" />
                  <rect x="3" y="1" width="calc(100% - 6px)" height="calc(100% - 2px)" rx="20" 
                        fill="none" stroke="var(--marker-red)" strokeWidth="1" strokeOpacity="0.5" filter="url(#roughLineAlt)" />
                </svg>
              )}
              {cat}
            </button>
          ))}
        </div>

        {mainSkills.length > 0 && (
          <div className="skills-grid">
            {mainSkills.map((skill, idx) => {
              const expertise = skill.expertise || 0;
              const unevenStyles = getUnevenStyles(idx + 1 + skill.name.length); // reliable seed

              return (
                <div 
                  className="skill-card-wrapper" 
                  key={`${skill.name}-${idx}`}
                  ref={(el) => { if (el) cardsRef.current.push(el); }}
                >
                  <div
                    className="skill-card"
                    data-expertise={expertise}
                    style={unevenStyles}
                  >
                    <svg className="skill-card-frame" width="100%" height="100%" preserveAspectRatio="none">
                      <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" 
                            fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeOpacity="0.8" filter="url(#roughLine)" />
                      <rect x="3" y="1" width="calc(100% - 6px)" height="calc(100% - 2px)" rx="4" 
                            fill="none" stroke="var(--pencil)" strokeWidth="0.8" strokeOpacity="0.4" filter="url(#roughLineAlt)" />
                    </svg>

                    <svg className="skill-washi-tape" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--highlighter)" opacity="0.8" filter="url(#roughLine)" />
                    </svg>

                    <div className="skill-header">
                      <div className="skill-icon-wrapper">
                        {skill.icon || "⚡"}
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <div className="skill-stars-container">
                          {[1, 2, 3, 4, 5].map((star) => {
                            const isFilled = (expertise / 20) >= star - 0.5;
                            return <Star key={star} filled={isFilled} />;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {learningSkills.length > 0 && (
          <>
            {mainSkills.length > 0 && (
              <h3 className="learning-section-heading">Leveling Up</h3>
            )}
            <div className="skills-grid">
              {learningSkills.map((skill, idx) => {
                const expertise = skill.expertise || 0;
                // Add an offset to seed so rotations vary correctly in the second loop
                const unevenStyles = getUnevenStyles(idx + 100 + skill.name.length); 

                return (
                  <div 
                    className="skill-card-wrapper" 
                    key={`${skill.name}-${idx}`}
                    ref={(el) => { if (el) cardsRef.current.push(el); }}
                  >
                    <div
                      className="skill-card"
                      data-expertise={expertise}
                      style={unevenStyles}
                    >
                      <svg className="skill-card-frame" width="100%" height="100%" preserveAspectRatio="none">
                        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" 
                              fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeOpacity="0.8" filter="url(#roughLine)" />
                        <rect x="3" y="1" width="calc(100% - 6px)" height="calc(100% - 2px)" rx="4" 
                              fill="none" stroke="var(--pencil)" strokeWidth="0.8" strokeOpacity="0.4" filter="url(#roughLineAlt)" />
                      </svg>

                      <svg className="skill-washi-tape" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--highlighter)" opacity="0.8" filter="url(#roughLine)" />
                      </svg>

                      <div className="skill-header">
                        <div className="skill-icon-wrapper">
                          {skill.icon || "⚡"}
                        </div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <div className="skill-stars-container">
                            {[1, 2, 3, 4, 5].map((star) => {
                              const isFilled = (expertise / 20) >= star - 0.5;
                              return <Star key={star} filled={isFilled} />;
                            })}
                            <span className="learning-tag">growing 🌱</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {mainSkills.length === 0 && learningSkills.length === 0 && (
          <div className="skills-empty">
            No skills found in this category
            <svg className="skills-empty-svg" viewBox="0 0 200 80">
              <path d="M 10,40 Q 100,10 190,40" fill="none" stroke="var(--pencil)" strokeWidth="1" strokeDasharray="5,5" filter="url(#roughLine)" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
