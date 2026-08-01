"use client";

import { useEffect, useState } from "react";

export default function SkillsEditorPage() {
  const [skills, setSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchSkills = async () => {
    try {
      const res = await fetch("/api/dashboard/skills");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setSkills(json.data);
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load skills", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSkills();
  }, []);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    setSkills((prev) => [...prev, { name: newSkillName.trim(), category: "Frontend" }]);
    setNewSkillName("");
  };

  const handleNameChange = (index, value) => {
    setSkills((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], name: value };
      return next;
    });
  };

  const handleRemove = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    setSkills((prev) => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleMoveDown = (index) => {
    if (index === skills.length - 1) return;
    setSkills((prev) => {
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
      const res = await fetch("/api/dashboard/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills }),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "Skills list updated successfully!", isError: false });
        if (Array.isArray(json.data)) {
          setSkills(json.data);
        }
      } else {
        setStatusMessage({ text: json.error || "Failed to update skills", isError: true });
      }
    } catch (e) {
      setStatusMessage({ text: "An error occurred while saving", isError: true });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: "40px 0", color: "var(--text-2)" }}>Loading skills list...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
          CMS Editor
        </span>
        <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
          Edit Skills List
        </h1>
        <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
          Add, remove, edit, and reorder skill chips displayed on your portfolio.
        </p>
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

      {/* Add New Skill Quick Form */}
      <form
        onSubmit={handleAddSkill}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line-strong)",
          borderRadius: "14px",
          padding: "20px 24px",
          marginBottom: "24px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          placeholder="Add a new skill (e.g. Next.js, Docker, Zustand)..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "8px",
            background: "var(--surface-2)",
            border: "1px solid var(--line-strong)",
            color: "var(--text)",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          className="btn btn-solid"
          style={{ padding: "10px 18px", fontSize: "13px" }}
        >
          + Add Skill
        </button>
      </form>

      {/* Skills Reorderable List */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line-strong)",
          borderRadius: "16px",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                borderRadius: "10px",
                padding: "8px 14px",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: "11px",
                  color: "var(--text-3)",
                  width: "24px",
                  textAlign: "center",
                }}
              >
                {idx + 1}
              </span>

              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleNameChange(idx, e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px 10px",
                  borderRadius: "6px",
                  background: "var(--surface)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--text)",
                  fontSize: "14px",
                  outline: "none",
                }}
              />

              <div style={{ display: "flex", gap: "4px" }}>
                <button
                  type="button"
                  onClick={() => handleMoveUp(idx)}
                  disabled={idx === 0}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    color: "var(--text)",
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    cursor: idx === 0 ? "default" : "pointer",
                    opacity: idx === 0 ? 0.3 : 1,
                  }}
                >
                  &uarr;
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveDown(idx)}
                  disabled={idx === skills.length - 1}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    color: "var(--text)",
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    cursor: idx === skills.length - 1 ? "default" : "pointer",
                    opacity: idx === skills.length - 1 ? 0.3 : 1,
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
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

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
          {saving ? "Saving Changes..." : "Save Skills List"}
        </button>
      </form>
    </div>
  );
}
