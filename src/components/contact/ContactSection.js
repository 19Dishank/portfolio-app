"use client";

import React, { memo, useEffect, useState } from "react";

const ContactSection = memo(function ContactSection() {
  const [contactData, setContactData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadContact() {
      try {
        const res = await fetch("/api/contact");
        const json = await res.json();
        if (json.success && json.data) {
          setContactData(json.data);
        }
      } catch (e) {
        // Handle error if needed
      }
    }
    loadContact();
  }, []);

  const handleAction = (e, chan) => {
    if (chan.actionText?.toLowerCase() === "copy" || chan.label?.toLowerCase() === "email") {
      e.preventDefault();
      navigator.clipboard.writeText(chan.value).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
      return;
    }

    if (chan.href && chan.href !== "#") {
      if (chan.isExternal !== false) {
        window.open(chan.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = chan.href;
      }
    }
  };

  if (!contactData) {
    return <section id="contact" style={{ minHeight: "200px" }}></section>;
  }

  return (
    <section id="contact">
      <div className="wrap">
        <span className="eyebrow reveal in">{contactData.eyebrow}</span>
        <p className="contact-lead serif reveal in">
          {contactData.leadText}
        </p>

        <div className="contact-channels reveal in">
          {(contactData.channels || []).map((chan, idx) => (
            <div className="channel" key={chan._id || `chan-${idx}`}>
              <span className="channel-label">{chan.label}</span>
              <span className="channel-value">{chan.value}</span>
              <button
                type="button"
                className="channel-action"
                onClick={(e) => handleAction(e, chan)}
                style={{
                  cursor: chan.href === "#" && chan.actionText?.toLowerCase() !== "copy" ? "default" : "pointer",
                  borderColor: chan.href === "#" && chan.actionText?.toLowerCase() !== "copy" ? "transparent" : "var(--line-strong)",
                }}
              >
                {chan.actionText || "Open"}
                {chan.actionText?.toLowerCase() === "copy" && (
                  <span className={`copy-toast ${copied ? "show" : ""}`}>
                    Copied!
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
