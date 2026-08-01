"use client";

import { useEffect, useState } from "react";

export default function AboutEditorPage() {
  const [formData, setFormData] = useState({
    eyebrow: "",
    heading: "",
    paragraphs: [""],
    facts: [{ label: "", num: "" }],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchAboutData = async () => {
    try {
      const res = await fetch("/api/dashboard/about");
      const json = await res.json();
      if (json.success && json.data) {
        setFormData({
          eyebrow: json.data.eyebrow || "",
          heading: json.data.heading || "",
          paragraphs: json.data.paragraphs?.length ? json.data.paragraphs : [""],
          facts: json.data.facts?.length ? json.data.facts : [{ label: "", num: "" }],
        });
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load About data", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAboutData();
  }, []);

  const handleParagraphChange = (index, value) => {
    setFormData((prev) => {
      const next = [...prev.paragraphs];
      next[index] = value;
      return { ...prev, paragraphs: next };
    });
  };

  const addParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: [...prev.paragraphs, ""],
    }));
  };

  const removeParagraph = (index) => {
    setFormData((prev) => {
      const next = prev.paragraphs.filter((_, i) => i !== index);
      return { ...prev, paragraphs: next.length ? next : [""] };
    });
  };

  const handleFactChange = (index, field, value) => {
    setFormData((prev) => {
      const next = [...prev.facts];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, facts: next };
    });
  };

  const addFact = () => {
    setFormData((prev) => ({
      ...prev,
      facts: [...prev.facts, { label: "", num: "" }],
    }));
  };

  const removeFact = (index) => {
    setFormData((prev) => {
      const next = prev.facts.filter((_, i) => i !== index);
      return { ...prev, facts: next.length ? next : [{ label: "", num: "" }] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage({ text: "", isError: false });

    try {
      const res = await fetch("/api/dashboard/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "About section updated successfully!", isError: false });
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
    return <div style={{ padding: "40px 0", color: "var(--text-2)" }}>Loading About content...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
          CMS Editor
        </span>
        <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
          Edit About Section
        </h1>
        <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
          Update your bio paragraphs and highlight statistics/facts.
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
          gap: "24px",
        }}
      >
        {/* Eyebrow */}
        <div>
          <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
            Eyebrow Text
          </label>
          <input
            type="text"
            value={formData.eyebrow}
            onChange={(e) => setFormData({ ...formData, eyebrow: e.target.value })}
            placeholder="e.g. A little about me"
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

        {/* Heading */}
        <div>
          <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "6px", textTransform: "uppercase" }}>
            Section Heading
          </label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
            placeholder="e.g. Grounded in fundamentals, particular about details."
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

        {/* Paragraphs */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <label className="mono" style={{ fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase" }}>
              Bio Paragraphs
            </label>
            <button
              type="button"
              onClick={addParagraph}
              className="mono"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent)",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              + Add Paragraph
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {formData.paragraphs.map((p, idx) => (
              <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <textarea
                  rows={3}
                  value={p}
                  onChange={(e) => handleParagraphChange(idx, e.target.value)}
                  placeholder={`Paragraph ${idx + 1}...`}
                  style={{
                    flex: 1,
                    padding: "11px 14px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
                {formData.paragraphs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(idx)}
                    style={{
                      background: "rgba(226, 145, 106, 0.15)",
                      border: "1px solid var(--accent-2)",
                      color: "var(--accent-2)",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Facts Grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <label className="mono" style={{ fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase" }}>
              Facts / Highlight Grid Items
            </label>
            <button
              type="button"
              onClick={addFact}
              className="mono"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent)",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              + Add Fact Item
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {formData.facts.map((fact, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Label (e.g. Primary stack)"
                  value={fact.label}
                  onChange={(e) => handleFactChange(idx, "label", e.target.value)}
                  style={{
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
                <input
                  type="text"
                  placeholder="Value / Number (e.g. React)"
                  value={fact.num}
                  onChange={(e) => handleFactChange(idx, "num", e.target.value)}
                  style={{
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
                {formData.facts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFact(idx)}
                    style={{
                      background: "rgba(226, 145, 106, 0.15)",
                      border: "1px solid var(--accent-2)",
                      color: "var(--accent-2)",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
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
          {saving ? "Saving Changes..." : "Save About Section"}
        </button>
      </form>
    </div>
  );
}
