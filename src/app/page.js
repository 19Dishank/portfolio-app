"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import ReactGA from "react-ga4";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Loader from "@/app/loader";
import CardNav from "@/components/cardnav/CardNav";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projectcard/ProjectsSection";
import Experience from "@/components/experience/Experience";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // Analytics initialization
    ReactGA.initialize("G-0CDN4F9KVV");
    ReactGA.send("pageview");

    let lenis;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // eslint-disable-next-line react-hooks/set-state-in-effect
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
      {/* Interactive Page Loader Overlay */}
      <Loader />

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
