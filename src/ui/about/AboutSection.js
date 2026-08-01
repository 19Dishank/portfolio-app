import React, { memo } from "react";

const AboutSection = memo(function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <span className="eyebrow reveal">A little about me</span>
        <h2 className="h2 serif reveal">
          Grounded in fundamentals, <em>particular about details.</em>
        </h2>
        <div className="about-body" style={{ marginTop: "26px" }}>
          <p className="reveal">
            I got into frontend work because I liked the immediacy of it — you
            change something, you see it, you feel whether it's right. I care
            about{" "}
            <span className="highlight">
              the parts of a UI most people never consciously notice
            </span>
            : whether a hover state feels responsive, whether a table of numbers
            stays readable at a glance, whether a form makes sense the first
            time.
          </p>
          <p className="reveal">
            Right now that means building an aviation weather dashboard people rely
            on mid-shift, and a multi-tenant document platform that has to stay
            simple even as the data underneath gets complicated.
          </p>
        </div>
        <div className="facts reveal">
          <div className="fact">
            <span className="fact-label">Primary stack</span>
            <div className="fact-num serif">React</div>
          </div>
          <div className="fact">
            <span className="fact-label">Based in</span>
            <div className="fact-num serif">Surat</div>
          </div>
          <div className="fact">
            <span className="fact-label">Current role</span>
            <div className="fact-num serif">Frontend Engineer</div>
          </div>
          <div className="fact">
            <span className="fact-label">Availability</span>
            <div className="fact-num serif">Open</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
