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
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

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
      },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [],
    href: "#projects",
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
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript color="#3178C6" />,
    expertise: 50,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss color="#06B6D4" />,
    expertise: 80,
  },
  {
    name: "Redux Toolkit (RTK)",
    category: "Frontend",
    icon: <SiRedux color="#764ABC" />,
    expertise: 65,
  },
  {
    name: "Zustand",
    category: "Frontend",
    icon: <RiCodeSSlashLine color="#EAB308" />,
    expertise: 80,
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
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs color="#000000" />,
    expertise: 40,
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
    name: "Antigravity AI",
    category: "AI & Automation",
    icon: <RiCodeSSlashLine color="#a855f7" />,
    expertise: 85,
  },
  {
    name: "Claude",
    category: "AI & Automation",
    icon: <SiOpenai color="#d97757" />,
    expertise: 65,
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
    year: "Jan 2026",
    status: "Present",
    role: "Software Developer Intern",
    company: "Narola Infotech LLP.",
    tech: ["React.js", "Tailwind", "JavaScript", "TypeScript"],
  },
];

export const projects = [
  {
    title: "Portfolio Web App",
    description:
      "A modern React.js portfolio built with smooth scrolling, elegant UI, and mobile-first responsiveness. It features animated popups, and clean layout transitions for a seamless user experience — all designed to reflect a sleek, classy aesthetic.",
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "CSS", "JavaScript (ES6+)"],
    liveLink: "https://dishank-portfolio.vercel.app",
    codeLink: "https://github.com/19Dishank/portfolio-app",
  },
  {
    title: "AWIP — Aviation Weather Intelligence Platform",
    description:
      "A real-time aviation weather dashboard for pilots and dispatch teams, featuring proactive socket management and comprehensive alternate airport scoring.",
    type: "Frontend Dashboard",
    year: "2026",
    technologies: ["React", "Zustand", "Tailwind", "Socket.io Client"],
    liveLink: "#",
    codeLink: "https://github.com/19Dishank/awip-frontend",
  },
  {
    title: "DocCentral — Document Management SaaS",
    description:
      "A multi-tenant document management SaaS with real-time features, precise storage accounting, and a responsive Windows 11-style interface.",
    type: "Frontend SaaS",
    year: "2026",
    technologies: ["React 19", "Vite", "Tailwind v4", "shadcn/ui", "Socket.io Client"],
    liveLink: "https://app.doccenter.in",
    codeLink: "https://github.com/19Dishank/doc-centre-frontend",
  },
  {
    title: "DipThinq – AI Conversation Platform",
    description:
      "A modern AI chat platform built with React + Tailwind. Supports multiple AI agents (Creative, Code Assistant,Deep Thinker) and integrates multiple AI models via OpenRouter. Includes dark/light mode and fully responsive UI.",
    type: "Frontend Web-App",
    year: "2025",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "OpenRouter API",
    ],
    liveLink: "https://dipthinq.vercel.app",
    codeLink: "https://github.com/19Dishank/dipthinq",
  },
  {
    title: "AI Notes App – Smart Notes with AI",
    description:
      "A modern AI notes app built with React + Tailwind. Create, edit, delete, and search your notes with built-in AI assistance for smart note generation.",
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    liveLink: "https://ai-notes-react.vercel.app",
    codeLink: "https://github.com/19Dishank/ai-notes-react",
  },
  {
    title: "AlphaArray - Online Study Platform",
    description:
      "AlphaArray is a PHP-based educational web application designed to empower learners, instructors, and institutions through an interactive and scalable online learning environment.",
    type: "Web Application",
    year: "2024",
    technologies: ["HTML", "CSS", "MYSQL", "PHP", "JavaScript", "Bootstrap"],
    liveLink: "#",
    codeLink: "https://github.com/19Dishank/alpha_array",
  },
  {
    title: "Jobify - Laravel-based Job Portal",
    description:
      "A full-featured Job Portal web application designed to connect job seekers with employers. The platform supports user registration, job postings, application tracking, and role-based access for administrators, recruiters, and job seekers.",
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
    liveLink: "#",
    codeLink: "https://github.com/19Dishank/jobify-php",
  },
];
