"use client";

import React, { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-copy mono">© 2026 Dishank Patel</span>
        <div
          className="footer-spotify-wrap"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            maxWidth: "320px",
            width: "100%",
          }}
        >
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
            style={{ borderRadius: "12px", border: "none", display: "block" }}
          />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
