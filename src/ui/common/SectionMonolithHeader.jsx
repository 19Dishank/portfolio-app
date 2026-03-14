import React, { forwardRef } from "react";

const SectionMonolithHeader = forwardRef(
  ({ title, ghostText }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2rem 0",
          width: "90%",
          maxWidth: "1350px",
          margin: "0 auto",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <style>
          {`
            .ghost-text-bg {
              left: 2%;
              font-size: clamp(2.5rem, 15vw, 7rem);
            }
            @media (max-width: 768px) {
              .ghost-text-bg {
                left: 5% !important;
              }
            }
          `}
        </style>
        <div
          className="ghost-text-bg"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            fontWeight: "900",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.09)",
            textTransform: "uppercase",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            zIndex: 0,
          }}
        >
          {ghostText}
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "clamp(12px, 3vw, 24px)",
          }}
        >
          <div
            style={{
              width: "clamp(6px, 1.5vw, 8px)",
              height: "clamp(6px, 1.5vw, 8px)",
              background: "#00BFA6",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(0, 191, 166, 0.8)",
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontSize: "clamp(1.25rem, 7vw, 3rem)",
              fontWeight: "800",
              textTransform: "uppercase",
              margin: 0,
              marginLeft: "1rem",
              color: "#fff",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h2>
          <div
            style={{
              flexGrow: 1,
              height: "2px",
              background: "linear-gradient(90deg, rgba(0,191,166,0.6), transparent)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    );
  }
);

export default SectionMonolithHeader;

