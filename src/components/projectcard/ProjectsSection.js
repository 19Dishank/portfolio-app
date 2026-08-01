"use client";

import React, { memo, useEffect, useState } from "react";

const ProjectsSection = memo(function ProjectsSection() {
  const [projectList, setProjectList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setProjectList(json.data);
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadProjects();
  }, []);

  const toggleMore = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProjectClick = (proj) => {
    const link = proj.liveLink && proj.liveLink !== "#" ? proj.liveLink : proj.codeLink;
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  if (!projectList || projectList.length === 0) {
    return <section id="work" style={{ minHeight: "300px" }}></section>;
  }

  const initialProjects = projectList.filter((p) => p.isFeatured !== false).slice(0, 3);
  const remainingProjects = projectList.filter(
    (p) => !initialProjects.includes(p)
  );

  return (
    <section id="work">
      <div className="wrap">
        <span className="eyebrow reveal in">Selected work</span>
        <h2 className="h2 serif reveal in">
          A few things <em>I&apos;ve shipped.</em>
        </h2>
        <p className="sub reveal in">
          The ones I&apos;d point you to first — everything else lives on GitHub.
        </p>

        <div className="proj-list reveal in">
          {initialProjects.map((proj, idx) => {
            const gradStyle = proj.gradientStart && proj.gradientEnd
              ? `linear-gradient(135deg, ${proj.gradientStart}, ${proj.gradientEnd})`
              : "linear-gradient(135deg, #2f5d4f, #8fd8bc)";

            return (
              <div
                className="proj"
                key={proj._id || `p-init-${idx}`}
                onClick={() => handleProjectClick(proj)}
                style={{ cursor: "pointer" }}
              >
                <div className="proj-thumb">
                  <div className="grad" style={{ background: gradStyle }} />
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
            );
          })}

          {remainingProjects.length > 0 && (
            <div
              className={`proj-more-wrap ${isOpen ? "open" : ""}`}
              id="moreProjects"
            >
              {remainingProjects.map((proj, idx) => {
                const gradStyle = proj.gradientStart && proj.gradientEnd
                  ? `linear-gradient(135deg, ${proj.gradientStart}, ${proj.gradientEnd})`
                  : "linear-gradient(135deg, #3d4a63, #7c8bab)";

                return (
                  <div
                    className="proj"
                    key={proj._id || `p-more-${idx}`}
                    onClick={() => handleProjectClick(proj)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="proj-thumb">
                      <div className="grad" style={{ background: gradStyle }} />
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
