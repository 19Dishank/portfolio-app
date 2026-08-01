"use client";

import React, { memo, useEffect, useState } from "react";

const Experience = memo(function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function loadExperience() {
      try {
        const res = await fetch("/api/experience");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setExperiences(json.data);
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadExperience();
  }, []);

  if (!experiences || experiences.length === 0) {
    return <section id="experience" style={{ minHeight: "200px" }}></section>;
  }

  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow reveal in">Where I&apos;ve been</span>
        <h2 className="h2 serif reveal in">
          Still early — <em>moving with intent.</em>
        </h2>

        <div className="timeline reveal in">
          {experiences.map((exp, idx) => {
            const timeRange = exp.startDate
              ? `${exp.startDate} — ${exp.endDate ? exp.endDate : "Present"}`
              : exp.timestamp || "Present";

            return (
              <div className="timeline-item" key={exp._id || `exp-${idx}`}>
                <div className="timeline-dot" />
                <div className="timeline-header">
                  <div className="timeline-role">
                    {exp.role}
                    {exp.company && (
                      <span className="timeline-company">{exp.company}</span>
                    )}
                  </div>
                  <span className="timeline-badge">{timeRange}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Experience;
