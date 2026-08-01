"use client";

import { useEffect, useState } from "react";

const PRESET_GRADIENTS = [
  { name: "Emerald Teal", start: "#2f5d4f", end: "#8fd8bc" },
  { name: "Sunset Amber", start: "#b8562f", end: "#e2916a" },
  { name: "Slate Blue", start: "#3d4a63", end: "#7c8bab" },
  { name: "Amethyst Violet", start: "#5b4a8c", end: "#9d8ce0" },
  { name: "Pine Mint", start: "#3a6b5c", end: "#98e0c4" },
  { name: "Burnt Peach", start: "#a64e2b", end: "#e08865" },
  { name: "Indigo Steel", start: "#4b5875", end: "#8a9bbd" },
  { name: "Electric Cyan", start: "#1a505f", end: "#5fe0db" },
  { name: "Midnight Rose", start: "#4a2c5a", end: "#e07a9b" },
];

export default function ProjectsEditorPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/dashboard/projects");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setProjects(json.data);
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load projects", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProjects();
  }, []);

  const handleAddProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        title: "New Project",
        description: "Project description...",
        type: "Frontend Web-App",
        year: "2026",
        technologies: ["React.js", "Tailwind CSS"],
        liveLink: "#",
        codeLink: "#",
        gradientStart: "#2f5d4f",
        gradientEnd: "#8fd8bc",
        isFeatured: false,
      },
    ]);
  };

  const handleProjectChange = (index, field, value) => {
    setProjects((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handlePresetSelect = (index, preset) => {
    setProjects((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        gradientStart: preset.start,
        gradientEnd: preset.end,
      };
      return next;
    });
  };

  const handleTechChange = (index, valueString) => {
    const techArray = valueString.split(",").map((t) => t.trim());
    setProjects((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], technologies: techArray };
      return next;
    });
  };

  const handleRemoveProject = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    setProjects((prev) => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleMoveDown = (index) => {
    if (index === projects.length - 1) return;
    setProjects((prev) => {
      const next = [...prev];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage({ text: "", isError: false });

    try {
      const res = await fetch("/api/dashboard/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projects }),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "Projects updated successfully!", isError: false });
        if (Array.isArray(json.data)) {
          setProjects(json.data);
        }
      } else {
        setStatusMessage({ text: json.error || "Failed to update projects", isError: true });
      }
    } catch (e) {
      setStatusMessage({ text: "An error occurred while saving", isError: true });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: "40px 0", color: "var(--text-2)" }}>Loading projects...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
            CMS Editor
          </span>
          <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
            Edit Projects
          </h1>
          <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
            Manage project details, stack tags, preset gradient colors, links, and featured flags.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddProject}
          className="btn btn-solid"
          style={{ padding: "10px 18px", fontSize: "13px" }}
        >
          + Add New Project
        </button>
      </div>

      {statusMessage.text && (
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            background: statusMessage.isError
              ? "rgba(226, 145, 106, 0.15)"
              : "rgba(143, 216, 188, 0.15)",
            border: `1px solid ${statusMessage.isError ? "var(--accent-2)" : "var(--accent)"}`,
            color: statusMessage.isError ? "var(--accent-2)" : "var(--accent)",
            fontSize: "13.5px",
            marginBottom: "24px",
          }}
        >
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line-strong)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {/* Header / Reorder */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="mono" style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "600" }}>
                Project #{idx + 1} {proj.isFeatured ? "★ Featured" : ""}
              </span>

              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  type="button"
                  onClick={() => handleMoveUp(idx)}
                  disabled={idx === 0}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)",
                    color: "var(--text)",
                    borderRadius: "6px",
                    width: "28px",
                    height: "28px",
                    cursor: idx === 0 ? "default" : "pointer",
                    opacity: idx === 0 ? 0.3 : 1,
                  }}
                >
                  &uarr;
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveDown(idx)}
                  disabled={idx === projects.length - 1}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)",
                    color: "var(--text)",
                    borderRadius: "6px",
                    width: "28px",
                    height: "28px",
                    cursor: idx === projects.length - 1 ? "default" : "pointer",
                    opacity: idx === projects.length - 1 ? 0.3 : 1,
                  }}
                >
                  &darr;
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveProject(idx)}
                  style={{
                    background: "rgba(226, 145, 106, 0.15)",
                    border: "1px solid var(--accent-2)",
                    color: "var(--accent-2)",
                    borderRadius: "6px",
                    padding: "0 10px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Delete Project
                </button>
              </div>
            </div>

            {/* Title & Type & Year */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "12px" }}>
              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={proj.title}
                  onChange={(e) => handleProjectChange(idx, "title", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Type
                </label>
                <input
                  type="text"
                  value={proj.type || "Frontend Web-App"}
                  onChange={(e) => handleProjectChange(idx, "type", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Year
                </label>
                <input
                  type="text"
                  value={proj.year || "2025"}
                  onChange={(e) => handleProjectChange(idx, "year", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                Description
              </label>
              <textarea
                rows={3}
                value={proj.description}
                onChange={(e) => handleProjectChange(idx, "description", e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--text)",
                  fontSize: "13.5px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Technologies Comma-separated */}
            <div>
              <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={Array.isArray(proj.technologies) ? proj.technologies.join(", ") : proj.technologies || ""}
                onChange={(e) => handleTechChange(idx, e.target.value)}
                placeholder="e.g. React.js, Tailwind CSS, JavaScript"
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--text)",
                  fontSize: "13.5px",
                  outline: "none",
                }}
              />
            </div>

            {/* Links */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Live Link
                </label>
                <input
                  type="text"
                  value={proj.liveLink || "#"}
                  onChange={(e) => handleProjectChange(idx, "liveLink", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Code Link
                </label>
                <input
                  type="text"
                  value={proj.codeLink || "#"}
                  onChange={(e) => handleProjectChange(idx, "codeLink", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Preset Gradient Swatches Section */}
            <div>
              <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "8px" }}>
                Select Gradient Style (Click to apply preset)
              </label>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
                {PRESET_GRADIENTS.map((p) => {
                  const isSelected =
                    proj.gradientStart?.toLowerCase() === p.start.toLowerCase() &&
                    proj.gradientEnd?.toLowerCase() === p.end.toLowerCase();

                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => handlePresetSelect(idx, p)}
                      title={p.name}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: `linear-gradient(135deg, ${p.start}, ${p.end})`,
                        border: isSelected ? "2px solid var(--text)" : "1px solid transparent",
                        color: "#ffffff",
                        fontSize: "11.5px",
                        fontWeight: "600",
                        cursor: "pointer",
                        boxShadow: isSelected ? "0 0 0 2px var(--accent)" : "none",
                        transition: "transform 0.15s",
                      }}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Checkbox & Live Thumbnail Preview */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid var(--line)" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13.5px" }}>
                <input
                  type="checkbox"
                  checked={Boolean(proj.isFeatured)}
                  onChange={(e) => handleProjectChange(idx, "isFeatured", e.target.checked)}
                  style={{ width: "16px", height: "16px", accentColor: "var(--accent)" }}
                />
                <span className="mono" style={{ fontSize: "12px", color: "var(--text)" }}>
                  Featured Project (Shown in top 3 by default)
                </span>
              </label>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="mono" style={{ fontSize: "11px", color: "var(--text-3)" }}>
                  Selected Card Gradient:
                </span>
                <div
                  style={{
                    width: "56px",
                    height: "28px",
                    borderRadius: "6px",
                    background: `linear-gradient(135deg, ${proj.gradientStart || "#2f5d4f"}, ${proj.gradientEnd || "#8fd8bc"})`,
                    border: "1px solid var(--line-strong)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={saving}
          className="btn btn-solid"
          style={{
            alignSelf: "flex-start",
            padding: "12px 24px",
            marginTop: "12px",
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "Saving Projects..." : "Save All Projects"}
        </button>
      </form>
    </div>
  );
}
