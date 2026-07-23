import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { experiences } from '../../constants';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper for generating slight random rotations and offsets for cards
const getUnevenStyles = (seed) => {
  const random1 = Math.sin(seed) * 10000;
  const random2 = Math.cos(seed) * 10000;
  const rotation = (random1 - Math.floor(random1)) * 3 - 1.5; // -1.5 to 1.5 deg
  const yOffset = (random2 - Math.floor(random2)) * 8 - 4; // -4px to 4px
  const xOffset = (random1 - Math.floor(random1)) * 6 - 3; // -3px to 3px
  
  return {
    transform: `rotate(${rotation}deg) translate(${xOffset}px, ${yOffset}px)`
  };
};

function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear refs on each render
  cardsRef.current = [];

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
          stagger: 0.15,
          ease: "back.out(1.2)",
          clearProps: "y,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      
      {/* Big Drawings on Background */}
      <div className="experience-bg-decorations">
        {/* Arc doodle hovering over the top of the sketchbook page */}
        <svg className="bg-doodle exp-bg-top-arc" viewBox="0 0 300 50" filter="url(#roughLine)">
          <path d="M 10,40 Q 150,0 290,40" fill="none" stroke="var(--marker-red)" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
        </svg>

        {/* Spiral top right */}
        <svg className="bg-doodle exp-bg-spiral" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,50 m 0,-5 a 5,5 0 1,1 0,10 a 10,10 0 1,1 0,-20 a 15,15 0 1,1 0,30 a 20,20 0 1,1 0,-40" fill="none" stroke="var(--pencil)" strokeWidth="2" strokeOpacity="0.4" />
        </svg>
        
        {/* Crosses bottom left */}
        <svg className="bg-doodle exp-bg-crosses" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 20,20 L 40,40 M 40,20 L 20,40 M 70,60 L 90,80 M 90,60 L 70,80" fill="none" stroke="var(--marker-red)" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>

        {/* Scribble star top left */}
        <svg className="bg-doodle exp-bg-star" viewBox="0 0 100 100" filter="url(#roughLine)">
          <path d="M 50,10 L 60,40 L 90,45 L 65,65 L 75,95 L 50,75 L 25,95 L 35,65 L 10,45 L 40,40 Z" fill="none" stroke="var(--pencil)" strokeWidth="2" strokeOpacity="0.3" strokeLinejoin="round" />
        </svg>

        {/* Zig-zags right middle */}
        <svg className="bg-doodle exp-bg-zigzag" viewBox="0 0 150 50" filter="url(#roughLine)">
          <path d="M 10,25 L 30,5 L 50,45 L 70,5 L 90,45 L 110,5 L 130,25" fill="none" stroke="var(--ballpoint)" strokeWidth="2" strokeOpacity="0.2" strokeLinejoin="round" />
        </svg>

        {/* Small dots bottom right */}
        <svg className="bg-doodle exp-bg-dots" viewBox="0 0 50 50" filter="url(#roughLine)">
          <circle cx="10" cy="10" r="2" fill="var(--pencil)" opacity="0.4" />
          <circle cx="30" cy="20" r="2" fill="var(--pencil)" opacity="0.4" />
          <circle cx="20" cy="40" r="2" fill="var(--pencil)" opacity="0.4" />
          <circle cx="40" cy="35" r="2" fill="var(--pencil)" opacity="0.4" />
        </svg>
      </div>

      <div className="experience-sketch-page">
        {/* Inner page doodles */}
        <div className="experience-inner-doodles">
          {/* Coffee ring stain */}
          <svg className="inner-doodle inner-doodle-coffee" viewBox="0 0 100 100" filter="url(#roughLine)">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#d4b483" strokeWidth="3" opacity="0.4" />
            <circle cx="48" cy="52" r="39" fill="none" stroke="#d4b483" strokeWidth="1" opacity="0.3" />
            <circle cx="52" cy="48" r="41" fill="none" stroke="#d4b483" strokeWidth="2" opacity="0.2" />
          </svg>

          {/* Random checkmark */}
          <svg className="inner-doodle inner-doodle-check" viewBox="0 0 50 50" filter="url(#roughLine)">
            <path d="M 10,25 L 20,35 L 45,10" fill="none" stroke="var(--highlighter)" strokeWidth="4" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Heart */}
          <svg className="inner-doodle inner-doodle-heart" viewBox="0 0 50 50" filter="url(#roughLine)">
            <path d="M 25,45 Q 10,30 10,15 A 10,10 0 0,1 25,15 A 10,10 0 0,1 40,15 Q 40,30 25,45 Z" fill="none" stroke="var(--marker-red)" strokeWidth="2" opacity="0.5" />
          </svg>

          {/* Paperclip */}
          <svg className="inner-doodle inner-doodle-clip" viewBox="0 0 30 80" filter="url(#roughLine)">
            <path d="M 20,60 L 20,15 A 5,5 0 0,0 10,15 L 10,65 A 10,10 0 0,0 30,65 L 30,20" fill="none" stroke="var(--ballpoint)" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
          </svg>
          
          {/* Squiggly line */}
          <svg className="inner-doodle inner-doodle-squiggly" viewBox="0 0 100 20" filter="url(#roughLine)">
            <path d="M 0,10 Q 10,20 20,10 T 40,10 T 60,10 T 80,10 T 100,10" fill="none" stroke="var(--pencil)" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
        {/* Double border for the sketch page */}
        <svg className="experience-page-border" width="100%" height="100%" preserveAspectRatio="none">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1.5" filter="url(#roughPaper)" />
          <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" rx="6" 
                fill="none" stroke="var(--ink)" strokeWidth="1" strokeOpacity="0.4" filter="url(#roughLine)" />
        </svg>

        {/* Ring holes */}
        <div className="experience-ring-holes">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="hole"></div>
          ))}
        </div>

        <div className="experience-header" ref={titleRef}>
          <h2 className="experience-title">
            Field Notes
          </h2>
          <p className="experience-subtitle">
            Jobs, internships, and everything I picked up <span className="highlight-wrapper">along the way<svg className="experience-subtitle-highlight" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M 2,12 Q 50,5 98,15" fill="none" stroke="var(--highlighter)" strokeWidth="12" strokeOpacity="0.6" filter="url(#roughLine)" />
            </svg></span>.
          </p>
          
          <svg className="experience-doodle experience-doodle-arrow" viewBox="0 0 50 50">
            <path d="M 10,40 Q 25,10 40,30" fill="none" stroke="var(--ballpoint)" strokeWidth="2" filter="url(#roughLine)" />
            <path d="M 30,25 L 40,30 L 35,40" fill="none" stroke="var(--ballpoint)" strokeWidth="2" filter="url(#roughLine)" />
          </svg>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, idx) => {
            const unevenStyles = getUnevenStyles(idx + 1 + exp.company.length);

            return (
              <div 
                className="exp-card-wrapper" 
                key={`${exp.company}-${idx}`}
                ref={(el) => { if (el) cardsRef.current.push(el); }}
              >
                <div
                  className="exp-card"
                  style={unevenStyles}
                >
                  {/* Card Border */}
                  <svg className="exp-card-frame" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" 
                          fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeOpacity="0.8" filter="url(#roughLine)" />
                    <rect x="3" y="1" width="calc(100% - 6px)" height="calc(100% - 2px)" rx="4" 
                          fill="none" stroke="var(--pencil)" strokeWidth="0.8" strokeOpacity="0.4" filter="url(#roughLineAlt)" />
                  </svg>

                  {/* Washi Tape */}
                  <svg className="exp-washi-tape" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M 5,5 Q 50,0 95,8 L 98,25 Q 50,20 2,28 Z" fill="var(--highlighter)" opacity="0.8" filter="url(#roughLine)" />
                  </svg>

                  <div className="exp-card-content">
                    <div className="exp-card-header">
                        <div className="exp-meta">
                            <span className="exp-year">{exp.year}</span>
                            <span className="exp-timeline-connector">
                                <svg viewBox="0 0 40 10" width="40" height="10">
                                    <path d="M 0,5 Q 20,2 35,5 L 30,2 M 35,5 L 30,8" fill="none" stroke="var(--pencil)" strokeWidth="1.5" filter="url(#roughLine)" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="exp-status">{exp.status}</span>
                        </div>
                        <div className="exp-role-wrapper">
                            <h3 className="exp-role">{exp.role}</h3>
                            {exp.status.toLowerCase() === "present" ? (
                                <div className="current-role-annotation">
                                    <svg className="annotation-arrow" viewBox="0 0 30 15" width="30" height="15">
                                        <path d="M 28,8 Q 15,4 2,8 M 8,2 L 2,8 L 8,14" fill="none" stroke="var(--marker-red)" strokeWidth="1.8" filter="url(#roughLine)" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="annotation-text">current role</span>
                                </div>
                            ) : (
                                <div className="past-role-annotation">
                                    <span className="annotation-text-past">role</span>
                                </div>
                            )}
                        </div>
                        <h4 className="exp-company">@ {exp.company}</h4>
                    </div>

                    {exp.description && (
                        <p className="exp-description">{exp.description}</p>
                    )}

                    <div className="exp-tech-tags">
                        {exp.tech.map((t, i) => (
                            <span key={i} className="exp-tech-tag">{t}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;