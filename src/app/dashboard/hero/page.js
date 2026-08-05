"use client";

import { useEffect, useState } from "react";

export default function HeroEditorPage() {
  const [formData, setFormData] = useState({
    eyebrow: "",
    firstName: "",
    lastName: "",
    roleText: "",
    resumeLink: "/Dishank_Patel_Resume.pdf",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchHeroData = async () => {
    try {
      const res = await fetch("/api/dashboard/hero");
      const json = await res.json();
      if (json.success && json.data) {
        setFormData({
          eyebrow: json.data.eyebrow || "",
          firstName: json.data.firstName || "",
          lastName: json.data.lastName || "",
          roleText: json.data.roleText || "",
          resumeLink: json.data.resumeLink || "/Dishank_Patel_Resume.pdf",
        });
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load Hero data", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchHeroData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage({ text: "", isError: false });

    try {
      const res = await fetch("/api/dashboard/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "Hero section updated successfully!", isError: false });
      } else {
        setStatusMessage({ text: json.error || "Failed to update", isError: true });
      }
    } catch (e) {
      setStatusMessage({ text: "An error occurred while saving", isError: true });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "40px 0", color: "var(--text-2)" }}>
        Loading Hero content...
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
          CMS Editor
        </span>
        <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
          Edit Hero Section
        </h1>
        <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
          Update the main greeting, eyebrow line, name, tagline role text, and resume link.
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

      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line-strong)",
          borderRadius: "16px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
            Eyebrow Text
          </label>
          <input
            type="text"
            value={formData.eyebrow}
            onChange={(e) => setFormData({ ...formData, eyebrow: e.target.value })}
            placeholder="e.g. Portfolio — Frontend Developer"
            style={{
              width: "100%",
              padding: "11px 14px",
              borderRadius: "8px",
              background: "var(--surface-2)",
              border: "1px solid var(--line-strong)",
              color: "var(--text)",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
              First Name
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="e.g. Dishank"
              style={{
                width: "100%",
                padding: "11px 14px",
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
            <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
              Last Name
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="e.g. Patel."
              style={{
                width: "100%",
                padding: "11px 14px",
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

        <div>
          <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
            Role / Tagline Text
          </label>
          <textarea
            rows={4}
            required
            value={formData.roleText}
            onChange={(e) => setFormData({ ...formData, roleText: e.target.value })}
            placeholder="Enter role description..."
            style={{
              width: "100%",
              padding: "11px 14px",
              borderRadius: "8px",
              background: "var(--surface-2)",
              border: "1px solid var(--line-strong)",
              color: "var(--text)",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />
        </div>

        <div>
          <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
            Resume URL / File Path
          </label>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <input
              type="text"
              value={formData.resumeLink}
              onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
              placeholder="e.g. /Dishank_Patel_Resume.pdf or https://drive.google.com/..."
              style={{
                flex: 1,
                padding: "11px 14px",
                borderRadius: "8px",
                background: "var(--surface-2)",
                border: "1px solid var(--line-strong)",
                color: "var(--text)",
                fontSize: "14px",
                outline: "none",
              }}
            />
            {formData.resumeLink && (
              <a
                href={formData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
                style={{ fontSize: "13px", padding: "10px 16px", whiteSpace: "nowrap" }}
              >
                Preview ↗
              </a>
            )}
          </div>
        </div>

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
          {saving ? "Saving Changes..." : "Save Hero Section"}
        </button>
      </form>
    </div>
  );
}
