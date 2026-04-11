import { FaMobileAlt } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiOpenai,
} from "react-icons/si";

import {
  alpha1,
  alpha2,
  alpha3,
  alpha4,
  note1,
  note2,
  note3,
  note4,
  p1,
  p2,
  p4,
  p5,
  dip2,
  dip3,
  dip4,
  dip5,
  app1,
  app2,
  d1,
  job1,
  job2,
  job3,
  pokedex,
  emailWriter,
} from "../assets/indx";

export const GITHUB_URL =
  process.env.REACT_APP_GITHUB_URL || "https://github.com/19Dishank";
export const LINKEDIN_URL =
  process.env.REACT_APP_LINKEDIN_URL ||
  "https://www.linkedin.com/in/19dishank/";
export const EMAIL_URL =
  process.env.REACT_APP_EMAIL_URL || "mailto:pateldishank19@gmail.com";

export const NAV_ITEMS = [
  {
    label: "Resume",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      {
        label: "View Resume",
        ariaLabel: "View Resume Online",
        href: "/resume.pdf",
        // onClick: handleResumeClick,
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

export const TECH_SKILLS = [
  {
    name: "React.js",
    category: "Frontend",
    icon: <SiReact color="#61DBFB" />,
    expertise: 70,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript color="#F7DF1E" />,
    expertise: 75,
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: <SiHtml5 color="#E44D26" />,
    expertise: 95,
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: <SiCss3 color="#2965F1" />,
    expertise: 70,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <SiBootstrap color="#7B11F5" />,
    expertise: 80,
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    icon: <FaMobileAlt color="#79c7ff" />,
    expertise: 75,
  },

  {
    name: "ChatGPT",
    category: "AI & Automation",
    icon: <SiOpenai color="#00FFB3" />,
    expertise: 80,
  },
  {
    name: "Cursor AI",
    category: "AI & Automation",
    icon: <RiCodeSSlashLine color="#38bdf8" />,
    expertise: 85,
  },
  {
    name: "Prompt Engineering",
    category: "AI & Automation",
    icon: <SiOpenai color="#00FFB3" />,
    expertise: 70,
  },

  {
    name: "VS Code",
    category: "Tools",
    icon: <VscCode color="#0078d7" />,
    expertise: 85,
  },
];

export const experiences = [
  {
    year: "2026",
    status: "Present",
    role: "Software Developer Intern",
    company: "Narola Infotech LLP.",
    // description: "Architecting high-performance user interfaces with React and Tailwind. Redesigned the core dashboard, reducing load times by 40% and improving mobile responsiveness.",
    tech: ["React.js", "Tailwind"],
  },
  // {
  //     year: "2023",
  //     status: "Finished",
  //     role: "Freelance Web Developer",
  //     company: "Personal Clients",
  //     description: "Developed custom landing pages and SEO-optimized portfolios for local businesses. Focused on clean code and accessibility standards.",
  //     tech: ["HTML/CSS", "JavaScript", "GSAP", "WordPress"]
  // }
];

export const projects = [
  {
    title: "Portfolio Web App",
    description:
      "A modern React.js portfolio built with smooth scrolling, elegant UI, and mobile-first responsiveness. It features animated popups, and clean layout transitions for a seamless user experience — all designed to reflect a sleek, classy aesthetic.",
    image: p1,
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "CSS", "JavaScript (ES6+)"],
    screenshots: [p2, p4, p5],
    liveLink: "https://dishank-portfolio.vercel.app",
    codeLink: "https://github.com/19Dishank/portfolio-app",
  },
  {
    title: "Portfolio Web App",
    description:
      "A modern React.js portfolio built with smooth scrolling, elegant UI, and mobile-first responsiveness. It features animated popups, and clean layout transitions for a seamless user experience — all designed to reflect a sleek, classy aesthetic.",
    image: d1,
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "CSS", "JavaScript (ES6+)"],

    liveLink: "https://deepkpatel.vercel.app",
    codeLink: "https://github.com/19Dishank/deep",
  },
  {
    title: "DipThinq – AI Conversation Platform",
    description:
      "A modern AI chat platform built with React + Tailwind. Supports multiple AI agents (Creative, Code Assistant,Deep Thinker) and integrates multiple AI models via OpenRouter. Includes dark/light mode and fully responsive UI.",
    image: dip2,
    type: "Frontend Web-App",
    year: "2025",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "OpenRouter API",
    ],
    screenshots: [dip3, dip4, dip5],
    liveLink: "https://dipthinq.vercel.app",
    codeLink: "https://github.com/19Dishank/dipthinq",
  },
  {
    title: "AI Notes App – Smart Notes with AI",
    description:
      "A modern AI notes app built with React + Tailwind. It allows you to create, edit, and delete notes. It also allows you to search for notes and delete notes. It also allows you to create notes with AI. It also allows you to create notes with AI. It also allows you to create notes with AI.",
    image: note1,
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    screenshots: [note2, note3, note4],
    liveLink: "https://ai-notes-react.vercel.app",
    codeLink: "https://github.com/19Dishank/ai-notes-react",
  },
  {
    title: "AlphaArray - Online Study Platform",
    description:
      "AlphaArray is a PHP-based educational web application designed to empower learners, instructors, and institutions through an interactive and scalable online learning environment.",
    image: alpha1,
    type: "Web Application",
    year: "2024",
    technologies: ["HTML", "CSS", "MYSQL", "PHP", "JavaScript", "Bootstrap"],
    screenshots: [alpha2, alpha3, alpha4],
    liveLink: "#",
    codeLink: "https://github.com/19Dishank/alpha_array",
  },
  {
    title: "Jobify - Laravel-based Job Portal",
    description:
      "A full-featured Job Portal web application designed to connect job seekers with employers. The platform supports user registration, job postings, application tracking, and role-based access for administrators, recruiters, and job seekers.",
    image: job1,
    type: "Web Application",
    year: "2024",
    technologies: [
      "HTML",
      "CSS",
      "PHP-LARAVEL",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    screenshots: [job1, job2, job3],
    liveLink: "#",
    codeLink: "https://github.com/19Dishank/jobify-php",
  },
  {
    title: "SafePassage - Secure Vault App",
    description:
      "SafePassage is an Android app that helps users securely store and manage their credentials and documents. It includes PIN- based access, a password manager, credit card storage, a document vault, a password generator, and a password strength monitor.Designed with an easy - to - use interface and strong security to ensure a private, seamless experience.",
    image: app1,
    type: "Mobile App",
    year: "2025",
    technologies: ["XML", "Firebase", "Kotlin"],
    screenshots: [app1, app2],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Pokedex - Pokemon App",
    description:
      "A modern Pokedex web app built with React.js + Tailwind. It allows you to search for Pokemon and view their details. It also allows you to view Pokemon in a grid view and a list view.",
    image: pokedex,
    type: "Frontend Web-App",
    year: "2026",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    screenshots: [],
    liveLink: "https://pokedex-puce-two-79.vercel.app/",
    codeLink: "https://github.com/19Dishank/pokedex",
  },
  {
    title: "Email Writer ",
    description:
      "A modern Email Writer web app built with React.js + Tailwind. It allows you to write emails. It also allows you to view the email in a preview mode.",
    image: emailWriter,
    type: "Frontend Web-App",
    year: "2026",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    screenshots: [],
    liveLink: "https://email-writer-omega.vercel.app/",
    codeLink: "https://github.com/19Dishank/Email-writer",
  },
];
