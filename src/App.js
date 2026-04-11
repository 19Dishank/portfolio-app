import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import CardNav from "./ui/cardnav/CardNav";
import ProjectsSection from "./ui/projectcard/ProjectsSection";
import HeroSection from "./ui/about/HeroSection";
import Footer from "./ui/footer/Footer";
import "./index.css";
import ContactSection from "./ui/contact/ContactSection";
import SkillsSection from "./ui/skills/SkillsSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactGA from "react-ga4";
import Experience from "./ui/experience/Experience";
import { NAV_ITEMS } from "./constants";

ReactGA.initialize("G-0CDN4F9KVV");
ReactGA.send("pageview");
gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const expRef = useRef(null);

  // ✅ Fade-in animation for home section - Optimized
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Use will-change for better performance
      if (appRef.current) {
        appRef.current.style.willChange = "opacity";
      }

      gsap.fromTo(
        appRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          force3D: true,
          onComplete: () => {
            if (appRef.current) {
              appRef.current.style.willChange = "auto";
            }
          },
        },
      );

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "power3.out",
          force3D: true,
        },
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  // ✅ Scroll-triggered animation for Experience section
  useLayoutEffect(() => {
    if (!expRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        expRef.current,
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
            trigger: expRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={appRef}
      style={{
        width: "100%",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* 🟣 HOME SECTION */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          isolation: "isolate",
          zIndex: 1,
        }}
      >
        <style>
          {`
            .hero-wrapper {
              position: absolute;
              inset: 0;
              z-index: 1;
            }
            @media (max-width: 800px) {
              .hero-wrapper {
                position: relative;
                height: auto;
              }
              #home {
                height: auto !important;
                min-height: 100vh;
              }
            }
          `}
        </style>
        <div style={{ position: "relative", zIndex: 2 }}>
          <CardNav
            logoAlt="Portfolio Logo"
            items={NAV_ITEMS}
            ease="power3.out"
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
          />
        </div>

        <div className="hero-wrapper">
          <HeroSection />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "8rem",
            zIndex: 3,
            pointerEvents: "none",
          }}
        ></div>
      </section>
      {/* 🟡 NEXT SECTION WITH SQUARES BACKGROUND + TECH STACK */}
      <SkillsSection />

      {/* Experience Section */}

      <Experience ref={expRef} />

      {/* experience section end  */}

      {/* 🟢 PROJECTS SECTION (handled fully inside component) */}
      <ProjectsSection />
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <SpeedInsights />
      {/* CSS for glow pulse */}
      <style>
        {`
          @keyframes glowPulse {
            0% {
              text-shadow:
                0 0 5px rgba(255,255,255,0.2),
                0 0 10px rgba(82,39,255,0.3),
                0 0 15px rgba(82,39,255,0.2);
            }
            100% {
              text-shadow:
                0 0 10px rgba(255,255,255,0.4),
                0 0 20px rgba(82,39,255,0.6),
                0 0 30px rgba(82,39,255,0.5);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
