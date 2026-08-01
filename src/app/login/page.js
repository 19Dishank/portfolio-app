"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Invalid username or password");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Background glow blobs */}
      <div className="bg-glow">
        <div className="blob green" />
        <div className="blob orange" />
      </div>

      {/* Theme Toggle Button */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 10,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      </button>

      {/* Login Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "var(--surface)",
          border: "1px solid var(--line-strong)",
          borderRadius: "16px",
          padding: "36px 32px",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
            Admin Access
          </span>
          <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
            Welcome back.
          </h1>
          <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
            Sign in to manage portfolio content
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              background: "rgba(226, 145, 106, 0.15)",
              border: "1px solid var(--accent-2)",
              color: "var(--accent-2)",
              fontSize: "13px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label
              className="mono"
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "11px",
                color: "var(--text-3)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "8px",
                background: "var(--surface-2)",
                border: "1px solid var(--line-strong)",
                color: "var(--text)",
                fontSize: "14px",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div>
            <label
              className="mono"
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "11px",
                color: "var(--text-3)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "8px",
                background: "var(--surface-2)",
                border: "1px solid var(--line-strong)",
                color: "var(--text)",
                fontSize: "14px",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-solid"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "8px",
              padding: "13px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
