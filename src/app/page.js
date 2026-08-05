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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [allData, setAllData] = useState({
    hero: null,
    about: null,
    skills: null,
    projects: null,
    experience: null,
    contact: null,
  });

  useEffect(() => {
    let completed = 0;
    const total = 6;

    const updateCount = () => {
      completed += 1;
      const pct = Math.round((completed / total) * 100);
      setLoadingProgress(pct);
      if (completed >= total) {
        setIsDataLoaded(true);
      }
    };

    const fetchEndpoint = async (url, key) => {
      try {
        const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
        const json = await res.json();
        if (json.success && json.data !== undefined) {
          setAllData((prev) => ({ ...prev, [key]: json.data }));
        }
      } catch (e) {
        console.error(`Error fetching ${url}:`, e);
      } finally {
        updateCount();
      }
    };

    fetchEndpoint("/api/hero", "hero");
    fetchEndpoint("/api/about", "about");
    fetchEndpoint("/api/skills", "skills");
    fetchEndpoint("/api/projects", "projects");
    fetchEndpoint("/api/experience", "experience");
    fetchEndpoint("/api/contact", "contact");
  }, []);

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
      <Loader isLoaded={isDataLoaded} progress={loadingProgress} />

      {/* Scroll Progress Bar */}
      <div id="progress" />

      {/* Ambient Background Glow */}
      <div className="bg-glow">
        <div className="blob green" />
        <div className="blob orange" />
      </div>

      {/* 1. Nav */}
      <CardNav lenis={lenisInstance} resumeLink={allData.hero?.resumeLink} />

      {/* 2. Hero / Landing */}
      <HeroSection lenis={lenisInstance} data={allData.hero} />

      {/* 3. About */}
      <AboutSection data={allData.about} />

      {/* 4. Skills */}
      <SkillsSection data={allData.skills} />

      {/* 5. Work / Projects */}
      <ProjectsSection data={allData.projects} />

      {/* 6. Experience */}
      <Experience data={allData.experience} />

      {/* 7. Contact */}
      <ContactSection data={allData.contact} />

      {/* 8. Footer */}
      <Footer />

      <SpeedInsights />
    </div>
  );
}
