"use client";

import React, { memo, useEffect, useState } from "react";

const HeroSection = memo(function HeroSection({ lenis }) {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function loadHero() {
      try {
        const res = await fetch("/api/hero");
        const json = await res.json();
        if (json.success && json.data) {
          setHeroData(json.data);
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadHero();
  }, []);

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

  if (!heroData) {
    return (
      <section className="hero" id="top" style={{ minHeight: "80vh" }}>
        <div className="watermark">DP</div>
      </section>
    );
  }

  return (
    <section className="hero" id="top">
      <div className="watermark">DP</div>
      <div className="wrap">
        <div className="hero-eyebrow reveal in">
          <span className="ln" /> {heroData.eyebrow}
        </div>
        <h1 className="hero-name reveal in">
          <span className="first">{heroData.firstName}</span>{" "}
          <span className="last">{heroData.lastName}</span>
        </h1>
        <p className="hero-role reveal in">{heroData.roleText}</p>
        <div className="hero-actions reveal in">
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
      </div>
    </section>
  );
});

export default HeroSection;
