import React, { forwardRef } from 'react';
import './Experience.css';

const experiences = [
    {
        year: "2026",
        status: "Present",
        role: "Software Developer Intern",
        company: "Narola Infotech LLP.",
        // description: "Architecting high-performance user interfaces with React and Tailwind. Redesigned the core dashboard, reducing load times by 40% and improving mobile responsiveness.",
        tech: ["React.js", "Tailwind"]
    },
    // {
    //     year: "2023",
    //     status: "Finished",
    //     role: "Freelance Web Developer",
    //     company: "Personal Clients",
    //     description: "Developed custom landing pages and SEO-optimized portfolios for local businesses. Focused on clean code and accessibility standards.",
    //     tech: ["HTML/CSS", "JavaScript", "GSAP", "WordPress"]
    // }
];

const Experience = forwardRef((props, ref) => {
    return (
        <section className="experience-section" ref={ref}>
            <div className="content-wrapper">

                {/* <div className="section-header">
          <h2 className="title">Experience</h2>
          <div className="header-line"></div>
        </div> */}

                {/* --- INTERNAL MONOLITH HEADER (02) --- */}
                <div style={{
                    position: "relative",
                    width: "100%",
                    marginBottom: "4rem" // Space before the timeline starts
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "0.5rem"
                    }}>
                        <h2 style={{
                            fontSize: "2rem",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            margin: 0,
                            color: "#fff",
                            letterSpacing: "1px"
                        }}>
                            Experience
                        </h2>
                        <div style={{
                            flexGrow: 1,
                            height: "1px",
                            background: "linear-gradient(90deg, #333, transparent)"
                        }}></div>
                        {/* <span style={{
                            fontFamily: "monospace",
                            color: "#888",
                            fontSize: "0.9rem"
                        }}>02</span> */}
                    </div>

                    <div style={{
                        fontSize: "4rem",
                        fontWeight: "900",
                        lineHeight: "0.8",
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.15)",
                        textTransform: "uppercase",
                        marginTop: "-15px",
                        pointerEvents: "none",
                        userSelect: "none",
                        letterSpacing: "2px",
                    }}>
                        HISTORY
                    </div>
                </div>
                {/* --- END HEADER --- */}

                <div className="experience-stack">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`experience-entry ${index === 0 ? 'active' : 'past'}`}>

                            {/* Sidebar: Year and Status */}
                            <div className="entry-sidebar">
                                <div className="year-display">{exp.year}</div>
                                <div className="status-label">
                                    {index === 0 && <span className="pulse-dot"></span>}
                                    {exp.status}
                                </div>
                            </div>

                            {/* Main: Details */}
                            <div className="entry-main">
                                <div className="main-header">
                                    <h3 className="role-text">{exp.role}</h3>
                                    <span className="company-text">@ {exp.company}</span>
                                </div>

                                <p className="description-text">{exp.description}</p>

                                <div className="tech-footer">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Experience;