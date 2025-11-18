import React from "react";
import "./TechStackCompact.css";

export default function TechStackCompact({ skills = [] }) {
  return (
    <div className="tech-compact-wrapper">
      <div className="tech-compact-grid">
        {skills.map((skill, idx) => (
          <div
            className="tech-compact-item"
            key={idx}
            style={{ "--delay": `${idx * 0.1}s` }}
          >
            <div className="tech-compact-icon">{skill.icon || "⚡"}</div>
            <div className="tech-compact-content">
              <h4 className="tech-compact-name">{skill.name}</h4>
              {skill.category && (
                <span className="tech-compact-category">{skill.category}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

