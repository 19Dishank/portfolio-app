"use client";

import React, { memo, useState } from "react";
import { projects } from "../../constants";

const GRADIENTS = [
  "linear-gradient(135deg, #2f5d4f, #8fd8bc)",
  "linear-gradient(135deg, #b8562f, #e2916a)",
  "linear-gradient(135deg, #3d4a63, #7c8bab)",
  "linear-gradient(135deg, #5b4a8c, #9d8ce0)",
  "linear-gradient(135deg, #3a6b5c, #98e0c4)",
  "linear-gradient(135deg, #a64e2b, #e08865)",
  "linear-gradient(135deg, #4b5875, #8a9bbd)",
];

const ProjectsSection = memo(function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMore = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProjectClick = (proj) => {
    const link = proj.liveLink && proj.liveLink !== "#" ? proj.liveLink : proj.codeLink;
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const initialProjects = (projects || []).slice(0, 3);
  const remainingProjects = (projects || []).slice(3);

  return (
    <section id="work">
      <div className="wrap">
        <span className="eyebrow reveal">Selected work</span>
        <h2 className="h2 serif reveal">
          A few things <em>I&apos;ve shipped.</em>
        </h2>
        <p className="sub reveal">
          The ones I&apos;d point you to first — everything else lives on GitHub.
        </p>

        <div className="proj-list reveal">
          {initialProjects.map((proj, idx) => (
            <div
              className="proj"
              key={`p-init-${idx}`}
              onClick={() => handleProjectClick(proj)}
              style={{ cursor: "pointer" }}
            >
              <div className="proj-thumb">
                <div
                  className="grad"
                  style={{ background: GRADIENTS[idx % GRADIENTS.length] }}
                />
                <span className="tag">{proj.type || "Web App"}</span>
              </div>
              <div>
                <div className="proj-title">{proj.title}</div>
                <p className="proj-desc">{proj.description}</p>
                <div className="proj-stack">
                  {(proj.technologies || []).map((tech, tIdx) => (
                    <span key={`t-${tIdx}`}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="proj-arrow">↗</div>
            </div>
          ))}

          {remainingProjects.length > 0 && (
            <div
              className={`proj-more-wrap ${isOpen ? "open" : ""}`}
              id="moreProjects"
            >
              {remainingProjects.map((proj, idx) => {
                const totalIdx = idx + 3;
                return (
                  <div
                    className="proj"
                    key={`p-more-${idx}`}
                    onClick={() => handleProjectClick(proj)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="proj-thumb">
                      <div
                        className="grad"
                        style={{
                          background: GRADIENTS[totalIdx % GRADIENTS.length],
                        }}
                      />
                      <span className="tag">{proj.type || "Web App"}</span>
                    </div>
                    <div>
                      <div className="proj-title">{proj.title}</div>
                      <p className="proj-desc">{proj.description}</p>
                      <div className="proj-stack">
                        {(proj.technologies || []).map((tech, tIdx) => (
                          <span key={`tm-${tIdx}`}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="proj-arrow">↗</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="work-footer">
          {remainingProjects.length > 0 && (
            <button
              type="button"
              className={`show-more-btn ${isOpen ? "open" : ""}`}
              id="showMoreBtn"
              onClick={toggleMore}
            >
              {isOpen ? "Show less " : "Show more work "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}
          <a
            href="https://github.com/19Dishank"
            target="_blank"
            rel="noreferrer"
            className="view-all"
          >
            Everything else lives on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
