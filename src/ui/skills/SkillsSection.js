import React, { memo } from "react";
import { TECH_SKILLS } from "../../constants";

const SkillsSection = memo(function SkillsSection() {
  const skillNames =
    TECH_SKILLS && TECH_SKILLS.length > 0
      ? TECH_SKILLS.map((s) => s.name)
      : [
          "React.js",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "NestJS",
          "Git",
          "REST APIs",
          "Figma",
          "Responsive UI",
        ];

  const mid = Math.ceil(skillNames.length / 2);
  const skillsA = skillNames.slice(0, mid);
  const skillsB = skillNames.slice(mid);

  // Repeat array 4 times to ensure track width is >200% screen width on all screens
  const loopA = [...skillsA, ...skillsA, ...skillsA, ...skillsA];
  const loopB = [...skillsB, ...skillsB, ...skillsB, ...skillsB];

  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow reveal">What I reach for</span>
        <h2 className="h2 serif reveal">
          My day-to-day <em>toolkit.</em>
        </h2>
      </div>
      <div className="reveal">
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
