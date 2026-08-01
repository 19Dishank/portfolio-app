"use client";

import Link from "next/link";

export default function DashboardOverviewPage() {
  const sections = [
    { title: "Hero Section", href: "/dashboard/hero", desc: "Manage main title, eyebrow text, and role description." },
    { title: "About Section", href: "/dashboard/about", desc: "Manage bio paragraphs and highlight statistics/facts." },
    { title: "Skills", href: "/dashboard/skills", desc: "Add, remove, and reorder tech stack skills chips." },
    { title: "Projects", href: "/dashboard/projects", desc: "Manage portfolio project cards, tags, links, and gradient colors." },
    { title: "Experience", href: "/dashboard/experience", desc: "Manage career work history timeline items." },
    { title: "Contact", href: "/dashboard/contact", desc: "Manage contact section lead copy and link channels." },
  ];

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
          Admin Panel
        </span>
        <h1 className="serif" style={{ fontSize: "32px", fontWeight: "600" }}>
          Content Dashboard
        </h1>
        <p className="sub" style={{ fontSize: "14px", marginTop: "8px" }}>
          Select a section below or from the sidebar to manage your portfolio content.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
        {sections.map((sec) => (
          <Link
            key={sec.title}
            href={sec.href}
            style={{
              textDecoration: "none",
              background: "var(--surface)",
              border: "1px solid var(--line-strong)",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s, border-color 0.2s",
            }}
          >
            <div>
              <h3 className="serif" style={{ fontSize: "20px", fontWeight: "600", color: "var(--text)", marginBottom: "8px" }}>
                {sec.title}
              </h3>
              <p className="sub" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                {sec.desc}
              </p>
            </div>
            <div
              className="mono"
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Edit Section &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
