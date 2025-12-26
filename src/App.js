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
import TechStackCompact from "./ui/skills/TechStackCompact";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactGA from "react-ga4";
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiOpenai
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaMobileAlt } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";


ReactGA.initialize("G-0CDN4F9KVV"); // your measurement ID
ReactGA.send("pageview");

const handleResumeClick = () => {
  ReactGA.event("resume_click", {
    value: 1
  });
};


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || "https://www.linkedin.com/in/19dishank/";
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

gsap.registerPlugin(ScrollTrigger);

// Move static data outside component to prevent recreation on every render
const NAV_ITEMS = [
    {
      label: "Resume",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "View Resume",
          ariaLabel: "View Resume Online",
          href: "/resume.pdf",
          onClick: handleResumeClick,
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

// const TECH_SKILLS = [
//   { name: "React.js", category: "Framework", icon: "⚛️", expertise: 70 },
//   { name: "JavaScript", category: "Language", icon: "⚡", expertise: 75 },
//   { name: "HTML & CSS", category: "Language", icon: "🎨", expertise: 95 },
//   { name: "Bootstrap", category: "Framework", icon: "🚀", expertise: 95 },

//   { name: "Responsive Design", category: "Design", icon: "📱", expertise: 75 },

//   { name: "Prompt Engineering", category: "AI", icon: "🤖", expertise: 85 },
//   { name: "Cursor AI", category: "AI Tools", icon: "🤖", expertise: 85 },
//   { name: "ChatGPT", category: "AI Tools", icon: "🤖", expertise: 85 },

//   { name: "VS Code", category: "Development Tools", icon: "🛠️", expertise: 85 },
// ];
const TECH_SKILLS = [
  
  { name: "React.js", category: "Frontend", icon: <SiReact color="#61DBFB" />, expertise: 70 },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript color="#F7DF1E" />, expertise: 75 },
  { name: "HTML", category: "Frontend", icon: <SiHtml5 color="#E44D26" />, expertise: 95 },
  { name: "CSS", category: "Frontend", icon: <SiCss3 color="#2965F1" />, expertise: 70 },
  { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap color="#7B11F5" />, expertise: 80 },
  { name: "Responsive Design", category: "Frontend", icon: <FaMobileAlt color="#79c7ff" />, expertise: 75 },

  { name: "ChatGPT", category: "AI & Automation", icon: <SiOpenai color="#00FFB3" />, expertise: 80 },
  { name: "Cursor AI", category: "AI & Automation", icon: <RiCodeSSlashLine color="#38bdf8" />, expertise: 85 },
  { name: "Prompt Engineering", category: "AI & Automation", icon: <SiOpenai color="#00FFB3" />, expertise: 70 },

  { name: "VS Code", category: "Tools", icon: <VscCode color="#0078d7" />, expertise: 85 },
];




function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const squaresRef = useRef(null);
  const projectsTitleRef = useRef(null);

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
          }
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
          force3D: true
        },
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  // ✅ Scroll-triggered animation for Skills section - Optimized
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Optimize ScrollTrigger performance
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
          refreshPriority: -1,
        },
      });

      // Projects section title animation
      if (projectsTitleRef.current) {
        gsap.fromTo(
          projectsTitleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: projectsTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Squares background animation - Optimized
      if (squaresRef.current) {
        tl.from(squaresRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          force3D: true,
        });
      }

      // Title animation - Optimized
      if (titleRef.current) {
        tl.from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.5",
        );
      }

      // Tech Stack section animation - Optimized
      if (scrollRef.current) {
        tl.from(
          scrollRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.7",
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
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
      <section
        id="cardswap"
        ref={sectionRef}
        style={{
          width: "100vw",
          minHeight: "100vh",
          position: "relative",
          zIndex: 5,
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* Subtle Gradient Background */}
        <div
          ref={squaresRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(8,4,20,0.9) 0%, rgba(3,2,6,0.95) 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              top: "15%",
              left: "15%",
              background:
                "radial-gradient(circle, rgba(130,70,255,0.35) 0%, rgba(0,0,0,0) 60%)",
              filter: "blur(45px)",
              opacity: 0.8,
            }}
          />
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

        {/* Tech Stack Content */}
        <div
          ref={scrollRef}
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1.5rem",
            zIndex: 2,
            boxSizing: "border-box",
            paddingBottom: "4rem",
          }}
        >
          <TechStackCompact skills={TECH_SKILLS} />
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
            ref={projectsTitleRef}
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
