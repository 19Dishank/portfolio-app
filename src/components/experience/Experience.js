"use client";

import React, { memo } from "react";

const EXPERIENCES_DATA = [
  {
    role: "Software Developer Intern",
    company: " — Narola Infotech LLP",
    startDate: "Jan 2026",
    endDate: null,
    description:
      "Building production frontend features in React and Tailwind, plus backend integration on live client work.",
  },
];

const Experience = memo(function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow reveal">Where I&apos;ve been</span>
        <h2 className="h2 serif reveal">
          Still early — <em>moving with intent.</em>
        </h2>

        <div className="timeline reveal">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const timeRange = exp.startDate
              ? `${exp.startDate} — ${exp.endDate ? exp.endDate : "Present"}`
              : exp.timestamp || "Present";

            return (
              <div className="timeline-item" key={`exp-${idx}`}>
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
