import { useEffect, useState } from "react";
import Lenis from "lenis";
import "./index.css";
import CardNav from "./ui/cardnav/CardNav";
import HeroSection from "./ui/about/HeroSection";
import AboutSection from "./ui/about/AboutSection";
import SkillsSection from "./ui/skills/SkillsSection";
import ProjectsSection from "./ui/projectcard/ProjectsSection";
import Experience from "./ui/experience/Experience";
import ContactSection from "./ui/contact/ContactSection";
import Footer from "./ui/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0CDN4F9KVV");
ReactGA.send("pageview");

function App() {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    let lenis;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      setLenisInstance(lenis);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const handleScroll = () => {
      const h = document.documentElement;
      const pct =
        ((h.scrollTop || document.body.scrollTop) /
          ((h.scrollHeight || document.body.scrollHeight) - h.clientHeight)) *
        100;
      const progressEl = document.getElementById("progress");
      if (progressEl) progressEl.style.width = pct + "%";
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Give DOM time to render before attaching observers
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div id="progress" />

      {/* Ambient Background Glow */}
      <div className="bg-glow">
        <div className="blob green" />
        <div className="blob orange" />
      </div>

      {/* 1. Nav */}
      <CardNav lenis={lenisInstance} />

      {/* 2. Hero / Landing */}
      <HeroSection lenis={lenisInstance} />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Skills */}
      <SkillsSection />

      {/* 5. Work / Projects */}
      <ProjectsSection />

      {/* 6. Experience */}
      <Experience />

      {/* 7. Contact */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer />

      <SpeedInsights />
    </div>
  );
}

export default App;
