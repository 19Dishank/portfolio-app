import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Hero from "@/models/Hero";
import About from "@/models/About";
import Skill from "@/models/Skill";
import Project from "@/models/Project";
import Experience from "@/models/Experience";
import Contact from "@/models/Contact";

const defaultProjects = [
  {
    title: "Portfolio Web App",
    description:
      "A modern React.js portfolio built with smooth scrolling, elegant UI, and mobile-first responsiveness. It features animated popups, and clean layout transitions for a seamless user experience — all designed to reflect a sleek, classy aesthetic.",
    type: "Frontend Web-App",
    year: "2025",
    technologies: ["React.js", "CSS", "JavaScript (ES6+)"],
    liveLink: "https://dishank-portfolio.vercel.app",
    codeLink: "https://github.com/19Dishank/portfolio-app",
    gradientStart: "#2f5d4f",
    gradientEnd: "#8fd8bc",
    isFeatured: true,
    order: 1,
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
    gradientStart: "#b8562f",
    gradientEnd: "#e2916a",
    isFeatured: true,
    order: 2,
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
    gradientStart: "#3d4a63",
    gradientEnd: "#7c8bab",
    isFeatured: true,
    order: 3,
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
    gradientStart: "#5b4a8c",
    gradientEnd: "#9d8ce0",
    isFeatured: false,
    order: 4,
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
    gradientStart: "#3a6b5c",
    gradientEnd: "#98e0c4",
    isFeatured: false,
    order: 5,
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
    gradientStart: "#a64e2b",
    gradientEnd: "#e08865",
    isFeatured: false,
    order: 6,
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
    gradientStart: "#4b5875",
    gradientEnd: "#8a9bbd",
    isFeatured: false,
    order: 7,
  },
];

const defaultSkills = [
  "React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit (RTK)",
  "Zustand", "HTML", "CSS", "Bootstrap", "Next.js", "Responsive Design",
  "ChatGPT", "Cursor AI", "Antigravity AI", "Claude", "Prompt Engineering", "VS Code"
];

export async function POST() {
  try {
    await dbConnect();

    // Hero
    await Hero.deleteMany({});
    await Hero.create({
      eyebrow: "Portfolio — Frontend Developer",
      firstName: "Dishank",
      lastName: "Patel.",
      roleText: "I'm a frontend developer working in React, Tailwind CSS and JavaScript — building things people actually rely on."
    });

    // About
    await About.deleteMany({});
    await About.create({
      eyebrow: "A little about me",
      heading: "Grounded in fundamentals, particular about details.",
      paragraphs: [
        "I got into frontend work because I liked the immediacy of it — you change something, you see it, you feel whether it's right. I care about the parts of a UI most people never consciously notice: whether a hover state feels responsive, whether a table of numbers stays readable at a glance, whether a form makes sense the first time.",
        "Right now that means building an aviation weather dashboard people rely on mid-shift, and a multi-tenant document platform that has to stay simple even as the data underneath gets complicated."
      ],
      facts: [
        { label: "Primary stack", num: "React" },
        { label: "Based in", num: "Surat" },
        { label: "Current role", num: "Frontend Engineer" },
        { label: "Availability", num: "Open" }
      ]
    });

    // Skills
    await Skill.deleteMany({});
    await Skill.insertMany(
      defaultSkills.map((name, index) => ({ name, order: index + 1 }))
    );

    // Projects
    await Project.deleteMany({});
    await Project.insertMany(defaultProjects);

    // Experience
    await Experience.deleteMany({});
    await Experience.create({
      role: "Software Developer Intern",
      company: " — Narola Infotech LLP",
      startDate: "Jan 2026",
      endDate: null,
      description: "Building production frontend features in React and Tailwind, plus backend integration on live client work.",
      order: 1
    });

    // Contact
    await Contact.deleteMany({});
    await Contact.create({
      eyebrow: "Get in touch",
      leadText: "If you're building something and want a hand on the frontend — I'd like to hear about it.",
      channels: [
        { label: "EMAIL", value: "pateldishank19@gmail.com", actionText: "Copy", href: "mailto:pateldishank19@gmail.com", isExternal: true },
        { label: "PORTFOLIO", value: "dishankpatel.in", actionText: "Visit", href: "https://dishankpatel.in", isExternal: true },
        { label: "GITHUB", value: "19Dishank", actionText: "Open", href: "https://github.com/19Dishank", isExternal: true },
        { label: "LINKEDIN", value: "19dishank", actionText: "Connect", href: "https://www.linkedin.com/in/19dishank/", isExternal: true },
        { label: "LOCATION", value: "Surat, Gujarat", actionText: "IST (UTC+5:30)", href: "#", isExternal: false }
      ]
    });

    return NextResponse.json({ success: true, message: "Database seeded successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
