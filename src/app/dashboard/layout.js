"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSidebarOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {
      // Ignore
    }
    router.push("/login");
  };

  const navItems = [
    { label: "Overview", href: "/dashboard" },
    { label: "Hero Section", href: "/dashboard/hero" },
    { label: "About Section", href: "/dashboard/about" },
    { label: "Skills", href: "/dashboard/skills" },
    { label: "Projects", href: "/dashboard/projects" },
    { label: "Experience", href: "/dashboard/experience" },
    { label: "Contact", href: "/dashboard/contact" },
  ];

  return (
    <div className="admin-layout">
      {/* Ambient Background Glow */}
      <div className="bg-glow">
        <div className="blob green" />
        <div className="blob orange" />
      </div>

      {/* Mobile Top Header */}
      <header className="admin-mobile-header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sidebarOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <span className="serif" style={{ fontSize: "16px", fontWeight: "600" }}>
            Dishank Patel <span className="mono" style={{ fontSize: "10px", color: "var(--accent)" }}>CMS</span>
          </span>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{ width: "32px", height: "32px" }}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
          </svg>
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div>
          {/* Brand Header */}
          <div style={{ marginBottom: "28px", paddingLeft: "4px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className="serif" style={{ fontSize: "17px", fontWeight: "600", color: "var(--text)" }}>
                Dishank Patel
              </div>
            </Link>
            <span
              className="mono"
              style={{
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Admin Dashboard
            </span>
          </div>

          {/* Nav List */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: isActive ? "600" : "500",
                    color: isActive ? "var(--text)" : "var(--text-2)",
                    background: isActive ? "var(--surface-2)" : "transparent",
                    borderLeft: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                    transition: "all 0.15s ease",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="mono" style={{ fontSize: "11px", color: "var(--text-3)" }}>
              Theme: {theme}
            </span>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{ width: "32px", height: "32px" }}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="btn btn-line"
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "9px 14px",
              fontSize: "13px",
              borderRadius: "8px",
            }}
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
