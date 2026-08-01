"use client";

import React, { memo, useState } from "react";

const ContactSection = memo(function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("pateldishank19@gmail.com").catch(() => { });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1400);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <span className="eyebrow reveal">Get in touch</span>
        <p className="contact-lead serif reveal">
          If you&apos;re building something and want a hand on the frontend —{" "}
          <em>I&apos;d like to hear about it.</em>
        </p>

        <div className="contact-channels reveal">
          <div className="channel">
            <span className="channel-label">EMAIL</span>
            <a
              href="mailto:pateldishank19@gmail.com"
              className="channel-value"
              style={{ textDecoration: "none" }}
            >
              pateldishank19@gmail.com
            </a>
            <button
              type="button"
              className="channel-action"
              onClick={handleCopyEmail}
            >
              Copy
              <span className={`copy-toast ${copied ? "show" : ""}`}>
                Copied!
              </span>
            </button>
          </div>

          <div className="channel">
            <span className="channel-label">PORTFOLIO</span>
            <span className="channel-value">dishankpatel.in</span>
            <a
              href="https://dishankpatel.in"
              target="_blank"
              rel="noreferrer"
              className="channel-action"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Visit
            </a>
          </div>

          <div className="channel">
            <span className="channel-label">GITHUB</span>
            <span className="channel-value">19Dishank</span>
            <a
              href="https://github.com/19Dishank"
              target="_blank"
              rel="noreferrer"
              className="channel-action"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Open
            </a>
          </div>

          <div className="channel">
            <span className="channel-label">LINKEDIN</span>
            <span className="channel-value">19dishank</span>
            <a
              href="https://www.linkedin.com/in/19dishank/"
              target="_blank"
              rel="noreferrer"
              className="channel-action"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Connect
            </a>
          </div>

          <div className="channel">
            <span className="channel-label">LOCATION</span>
            <span className="channel-value">Surat, Gujarat</span>
            <span
              className="channel-action"
              style={{
                borderColor: "transparent",
                color: "var(--text-3)",
                cursor: "default",
              }}
            >
              IST (UTC+5:30)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
