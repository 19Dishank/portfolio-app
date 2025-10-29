import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import CardNav from "./ui/cardnav/CardNav";
import InfiniteScroll from "./ui/skills/InfiniteScroll";
import ProjectsSection from "./ui/projectcard/ProjectsSection";
import HeroSection from "./ui/about/HeroSection";
import Footer from "./ui/footer/Footer";
import "./index.css";
import ContactSection from "./ui/contact/ContactSection";
import Darkveli from "./ui/darkveil/DarkVeil";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL;
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL;

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const squaresRef = useRef(null);

  const items = [
    {
      label: "Resume",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "View Resume",
          ariaLabel: "View Resume Online",
          href: "/resume.pdf",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [],
      href: "#projects", // smooth scroll to project section
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: EMAIL_URL,
          target: "_blank",
          rel: "noreferrer",
        },
        {
          label: "GitHub",
          ariaLabel: "View GitHub profile",
          href: GITHUB_URL,
          target: "_blank",
          rel: "noreferrer",
        },
        {
          label: "LinkedIn",
          ariaLabel: "View LinkedIn profile",
          href: LINKEDIN_URL,
          target: "_blank",
          rel: "noreferrer",
        },
      ],
    },
  ];

  const scrollItems = [
    { content: "💻 HTML" },
    { content: "🎨 CSS" },
    { content: "⚡ JavaScript" },
    { content: "🚀 Bootstrap" },
    { content: "⚛️ ReactJS" },
    { content: "🤖 Prompt Engineering" },
    { content: "🖌️ UI/UX Design" },
    { content: "📱 Responsive Design" },
  ];

  // ✅ Fade-in animation for home section
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        appRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power3.out" },
      );

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.8, ease: "power3.out" },
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  // ✅ Scroll-triggered animation for Skills section
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Squares background animation
      tl.from(squaresRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      // Title animation
      tl.from(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // InfiniteScroll animation, slide in like title
      tl.from(
        scrollRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7",
      ); // slightly overlapping for smooth sequence
    }, sectionRef);

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
        <div
          className="hero-wrapper"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <HeroSection />
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <CardNav logoAlt="Portfolio Logo" items={items} ease="power3.out" />
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

      {/* 🟡 NEXT SECTION WITH SQUARES BACKGROUND + INFINITE SCROLL */}
      <section
        id="cardswap"
        ref={sectionRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          zIndex: 5,
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* Squares Background */}
        <div
          ref={squaresRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Darkveli speed={2} scanlineIntensity={2} hueShift={325} />
          {/* <Squares
            speed={0.5}
            squareSize={40}
            direction="up"
            borderColor="#271E37"
            hoverFillColor="#222"
          /> */}
        </div>

        {/* Centered Title */}
        <div
          ref={titleRef}
          style={{
            position: "relative",
            zIndex: 2,
            padding: "1.5rem 0rem 0rem 0rem",
            fontSize: "3rem",
            fontWeight: "900",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: `
              0 0 5px rgba(255,255,255,0.3),
              0 0 10px rgba(82,39,255,0.5),
              0 0 20px rgba(82,39,255,0.4),
              0 2px 8px rgba(0,0,0,0.6)
            `,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "glowPulse 2s ease-in-out infinite alternate",
          }}
        >
          Tech Stack
        </div>

        {/* InfiniteScroll Content */}
        <div
          ref={scrollRef}
          style={{
            width: "100%",
            height: "100vh", // reduce from 100% to 60% of viewport
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "1.5rem", // minimal spacing under title
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          <InfiniteScroll
            items={scrollItems}
            isTilted={true}
            maxHeight="100vh"
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={3}
            negativeMargin=""
            autoplayDirection="up"
            pauseOnHover={true}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              marginTop: 0,
              paddingTop: 0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          />
        </div>
      </section>
      {/* 🟢 PROJECTS SECTION WITH CHROMAGRID */}
      <section
        id="projects"
        style={{
          width: "100vw",
          height: "100vh", // full viewport height
          position: "relative",
          zIndex: 5,
          backgroundColor: "#000", // black background
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "600px",
            position: "relative",
          }}
        >
          {/* Centered Title */}
          <div
            ref={titleRef}
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: "3rem",
              fontSize: "3rem",
              fontWeight: "900",
              color: "#fff",
              textAlign: "center",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: `
              0 0 5px rgba(255,255,255,0.3),
              0 0 10px rgba(82,39,255,0.5),
              0 0 20px rgba(82,39,255,0.4),
              0 2px 8px rgba(0,0,0,0.6)
            `,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "glowPulse 2s ease-in-out infinite alternate",
            }}
          >
            Projects
          </div>
          <section>
            <ProjectsSection speed={4} />
          </section>
        </div>
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
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
