"use client";

import React, { memo } from "react";

const HeroSection = memo(function HeroSection({ lenis }) {
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e) => {
    const btn = e.currentTarget;
    btn.style.transform = "translate(0px, 0px)";
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="top">
      <div className="watermark">DP</div>
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="ln" /> Portfolio — Frontend Developer
        </div>
        <h1 className="hero-name">
          <span className="first">Dishank</span> <span className="last">Patel.</span>
        </h1>
        <p className="hero-role">
          I&apos;m a frontend developer working in{" "}
          <b>React, Tailwind CSS and JavaScript</b> — building things people{" "}
          <em>actually rely on.</em>
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-solid magnetic"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleScrollTo(e, "#work")}
          >
            See my work
          </button>
          <a
            href="#contact"
            className="btn btn-line magnetic"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleScrollTo(e, "#contact")}
          >
            Get in touch
          </a>
        </div>
        {/* <div className="now-line">
          <span className="dot" /> Right now: building a weather dashboard for pilots
          at Narola Infotech
        </div> */}
      </div>
    </section>
  );
});

export default HeroSection;
