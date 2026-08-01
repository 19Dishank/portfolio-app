"use client";

import { useEffect, useState } from "react";

export default function ExperienceEditorPage() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchExperiences = async () => {
    try {
      const res = await fetch("/api/dashboard/experience");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setExperiences(json.data);
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load experience items", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchExperiences();
  }, []);

  const handleAddExperience = () => {
    setExperiences((prev) => [
      ...prev,
      {
        role: "Software Developer Intern",
        company: " — Narola Infotech LLP",
        startDate: "Jan 2026",
        endDate: "Present",
        description: "Building production frontend features in React and Tailwind, plus backend integration on live client work.",
      },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    setExperiences((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleRemove = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    setExperiences((prev) => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleMoveDown = (index) => {
    if (index === experiences.length - 1) return;
    setExperiences((prev) => {
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
      const res = await fetch("/api/dashboard/experience", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experiences }),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "Experience timeline updated successfully!", isError: false });
        if (Array.isArray(json.data)) {
          setExperiences(json.data);
        }
      } else {
        setStatusMessage({ text: json.error || "Failed to update timeline", isError: true });
      }
    } catch (e) {
      setStatusMessage({ text: "An error occurred while saving", isError: true });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: "40px 0", color: "var(--text-2)" }}>Loading experience items...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
            CMS Editor
          </span>
          <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
            Edit Experience Timeline
          </h1>
          <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
            Manage career work history items, dates, company names, and descriptions.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddExperience}
          className="btn btn-solid"
          style={{ padding: "10px 18px", fontSize: "13px" }}
        >
          + Add Experience Role
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
        {experiences.map((exp, idx) => (
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
            {/* Header & Controls */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="mono" style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "600" }}>
                Role #{idx + 1}
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
                  disabled={idx === experiences.length - 1}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)",
                    color: "var(--text)",
                    borderRadius: "6px",
                    width: "28px",
                    height: "28px",
                    cursor: idx === experiences.length - 1 ? "default" : "pointer",
                    opacity: idx === experiences.length - 1 ? 0.3 : 1,
                  }}
                >
                  &darr;
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
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
                  Delete Role
                </button>
              </div>
            </div>

            {/* Role & Company */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Role Title
                </label>
                <input
                  type="text"
                  required
                  value={exp.role}
                  onChange={(e) => handleItemChange(idx, "role", e.target.value)}
                  placeholder="e.g. Software Developer Intern"
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
                  Company Name (with prefix)
                </label>
                <input
                  type="text"
                  value={exp.company || ""}
                  onChange={(e) => handleItemChange(idx, "company", e.target.value)}
                  placeholder="e.g. — Narola Infotech LLP"
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
            </div>

            {/* Start Date & End Date */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Start Date
                </label>
                <input
                  type="text"
                  value={exp.startDate || ""}
                  onChange={(e) => handleItemChange(idx, "startDate", e.target.value)}
                  placeholder="e.g. Jan 2026"
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
                  End Date (Leave empty or &quot;Present&quot; if current)
                </label>
                <input
                  type="text"
                  value={exp.endDate || ""}
                  onChange={(e) => handleItemChange(idx, "endDate", e.target.value)}
                  placeholder="e.g. Present"
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
                value={exp.description || ""}
                onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                placeholder="Enter description..."
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
          </div>
        ))}

        <button
          type="submit"
          disabled={saving}
          className="btn btn-solid"
          style={{
            alignSelf: "flex-start",
            padding: "12px 24px",
            marginTop: "8px",
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "Saving Experience Timeline..." : "Save Experience Timeline"}
        </button>
      </form>
    </div>
  );
}
