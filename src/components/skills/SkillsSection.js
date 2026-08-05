"use client";

import React, { memo, useEffect, useState } from "react";

const SkillsSection = memo(function SkillsSection({ data }) {
  const parseSkills = (items) => {
    if (!Array.isArray(items)) return [];
    return items.map((item) => (typeof item === "string" ? item : item.name));
  };

  const [skillNames, setSkillNames] = useState(() => (data ? parseSkills(data) : []));

  useEffect(() => {
    if (data) {
      setSkillNames(parseSkills(data));
      return;
    }
    async function loadSkills() {
      try {
        const res = await fetch("/api/skills");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setSkillNames(parseSkills(json.data));
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadSkills();
  }, [data]);

  if (!skillNames || skillNames.length === 0) {
    return <section id="skills" style={{ minHeight: "150px" }}></section>;
  }

  const mid = Math.ceil(skillNames.length / 2);
  const skillsA = skillNames.slice(0, mid);
  const skillsB = skillNames.slice(mid);

  const loopA = [...skillsA, ...skillsA, ...skillsA, ...skillsA];
  const loopB = [...skillsB, ...skillsB, ...skillsB, ...skillsB];

  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow reveal in">What I reach for</span>
        <h2 className="h2 serif reveal in">
          My day-to-day <em>toolkit.</em>
        </h2>
      </div>
      <div className="reveal in">
        <div className="marquee-outer">
          <div className="marquee-track dir-left">
            {loopA.map((skill, idx) => (
              <div className="skill-chip" key={`sa-${idx}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer" style={{ marginTop: "10px" }}>
          <div className="marquee-track dir-right">
            {loopB.map((skill, idx) => (
              <div className="skill-chip" key={`sb-${idx}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
