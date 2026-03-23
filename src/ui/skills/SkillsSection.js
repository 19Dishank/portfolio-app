import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStackCompact from "./TechStackCompact";
import SectionMonolithHeader from "../common/SectionMonolithHeader";
import { TECH_SKILLS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const squaresRef = useRef(null);

  // Scroll-triggered animation for Skills section (localized)
  useLayoutEffect(() => {
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
          markers: false,
          refreshPriority: -1,
        },
      });

      if (squaresRef.current) {
        tl.from(squaresRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          force3D: true,
        });
      }

      if (titleRef.current) {
        tl.from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.5",
        );
      }

      if (scrollRef.current) {
        tl.from(
          scrollRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.7",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cardswap"
      ref={sectionRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        zIndex: 5,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Subtle Gradient Background */}
      <div
        ref={squaresRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(8,4,20,0.9) 0%, rgba(3,2,6,0.95) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "70%",
            height: "70%",
            top: "15%",
            left: "15%",
            background:
              "radial-gradient(circle, rgba(130,70,255,0.35) 0%, rgba(0,0,0,0) 60%)",
            filter: "blur(45px)",
            opacity: 0.8,
          }}
        />
      </div>

      {/* Section heading */}
      <SectionMonolithHeader ref={titleRef} title="Tech Stack" ghostText="SKILLS" />

      {/* Tech Stack Content */}
      <div
        ref={scrollRef}
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          boxSizing: "border-box",
          paddingBottom: "4rem",
        }}
      >
        <TechStackCompact skills={TECH_SKILLS} />
      </div>
    </section>
  );
}

export default SkillsSection;

