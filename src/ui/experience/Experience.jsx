import React, { useLayoutEffect, useRef } from 'react';
import './Experience.css';
import { experiences } from '../../constants';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionMonolithHeader from '../common/SectionMonolithHeader';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="experience-section" ref={sectionRef}>
            <div className="content-wrapper">

                {/* <div className="section-header">
          <h2 className="title">Experience</h2>
          <div className="header-line"></div>
        </div> */}

                {/* Section heading */}
                <SectionMonolithHeader title="Experience" ghostText="HISTORY" />

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
};

export default Experience;