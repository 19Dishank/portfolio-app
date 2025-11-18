import React from "react";
import "./TechStackMatrix.css";

export default function TechStackMatrix({ data = [] }) {
  return (
    <section className="matrix-grid">
      {data.map((column) => (
        <article className="matrix-card" key={column.title}>
          <h3 className="matrix-title">{column.title}</h3>
          <div className="matrix-body">
            {column.sections.map((section) => (
              <div className="matrix-section" key={section.label}>
                <p className="matrix-section-label">{section.label}</p>
                <ul className="matrix-pill-list">
                  {section.items.map((item) => (
                    <li className="matrix-pill" key={`${section.label}-${item}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

