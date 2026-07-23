import { useRef, lazy, Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
// import ProjectsSection from "./ui/projectcard/ProjectsSection";
import Hero from "./ui/hero/hero";
// import Footer from "./ui/footer/Footer";
import "./index.css";
// import ContactSection from "./ui/contact/ContactSection";
import SkillsSection from "./ui/skills/SkillsSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactGA from "react-ga4";
import Experience from "./ui/experience/Experience";
import Loader from "./ui/loader/Loader";

const ProjectsSection = lazy(() => import("./ui/projectcard/ProjectsSection"));
const ContactSection = lazy(() => import("./ui/contact/ContactSection"));
const Footer = lazy(() => import("./ui/footer/Footer"));

ReactGA.initialize("G-0CDN4F9KVV");
ReactGA.send("pageview");
gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const expRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (appRef.current) appRef.current.style.willChange = "opacity";

      gsap.fromTo(
        appRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          force3D: true,
          onComplete: () => {
            if (appRef.current) appRef.current.style.willChange = "auto";
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

  useEffect(() => {
    if (!expRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        expRef.current,
        { opacity: 0, y: 50 },
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
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="roughPaper" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.014" numOctaves="3" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="roughLine" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="4" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="roughLineAlt" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="13" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="9" result="n"/>
            <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0"/>
          </filter>
          <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--ink)" strokeWidth="1" opacity="0.6"/>
          </pattern>
        </defs>
      </svg>

      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          overflow: "hidden",
          isolation: "isolate",
          zIndex: 1,
        }}
      >
        <div className="hero-wrapper">
          <Hero />
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

      <SkillsSection />
      <Experience ref={expRef} />
      
      <Suspense fallback={<Loader />}>
        <ProjectsSection />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </Suspense>
      <SpeedInsights />
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
