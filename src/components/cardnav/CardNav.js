"use client";

import { useEffect, useState } from "react";

const CardNav = ({ lenis }) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = savedTheme || (prefersLight ? "light" : "dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="brand serif">
        Dishank Patel
      </a>
      <div className="navlinks">
        <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
          About
        </a>
        <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
          Skills
        </a>
        <a href="#work" onClick={(e) => handleNavClick(e, "#work")}>
          Work
        </a>
        <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")}>
          Experience
        </a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
          Contact
        </a>
      </div>
      <button
        type="button"
        className="theme-toggle"
        id="themeToggle"
        onClick={toggleTheme}
        aria-label="Toggle light and dark theme"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      </button>
    </nav>
  );
};

export default CardNav;
