"use client";

import React, { memo, useEffect, useState } from "react";

const AboutSection = memo(function AboutSection({ data }) {
  const [aboutData, setAboutData] = useState(data || null);

  useEffect(() => {
    if (data) {
      setAboutData(data);
      return;
    }
    async function loadAbout() {
      try {
        const res = await fetch("/api/about");
        const json = await res.json();
        if (json.success && json.data) {
          setAboutData(json.data);
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadAbout();
  }, [data]);

  if (!aboutData) {
    return <section id="about" style={{ minHeight: "200px" }}></section>;
  }

  return (
    <section id="about">
      <div className="wrap">
        <span className="eyebrow reveal in">{aboutData.eyebrow}</span>
        <h2 className="h2 serif reveal in">{aboutData.heading}</h2>
        <div className="about-body" style={{ marginTop: "26px" }}>
          {(aboutData.paragraphs || []).map((para, idx) => (
            <p key={idx} className="reveal in">
              {para}
            </p>
          ))}
        </div>
        <div className="facts reveal in">
          {(aboutData.facts || []).map((fact, idx) => (
            <div key={idx} className="fact">
              <span className="fact-label">{fact.label}</span>
              <div className="fact-num serif">{fact.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
