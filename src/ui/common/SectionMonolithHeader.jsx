import React, { forwardRef } from "react";

const SectionMonolithHeader = forwardRef(
  ({ title, ghostText }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.5rem 0 0 0",
          width: "90%",
          maxWidth: "1100px",
          margin: "0 auto",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "0.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              textTransform: "uppercase",
              margin: 0,
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            {title}
          </h2>
          <div
            style={{
              flexGrow: 1,
              height: "1px",
              background: "linear-gradient(90deg, #333, transparent)",
            }}
          />
        </div>

        <div
          style={{
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
          }}
        >
          {ghostText}
        </div>
      </div>
    );
  }
);

export default SectionMonolithHeader;

