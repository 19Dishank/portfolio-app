"use client";

import { useEffect, useState } from "react";

export default function ContactEditorPage() {
  const [formData, setFormData] = useState({
    eyebrow: "",
    leadText: "",
    channels: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const fetchContactData = async () => {
    try {
      const res = await fetch("/api/dashboard/contact");
      const json = await res.json();
      if (json.success && json.data) {
        setFormData({
          eyebrow: json.data.eyebrow || "",
          leadText: json.data.leadText || "",
          channels: Array.isArray(json.data.channels) ? json.data.channels : [],
        });
      }
    } catch (e) {
      setStatusMessage({ text: "Failed to load contact data", isError: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContactData();
  }, []);

  const handleAddChannel = () => {
    setFormData((prev) => ({
      ...prev,
      channels: [
        ...prev.channels,
        {
          label: "NEW CHANNEL",
          value: "contact info",
          actionText: "Open",
          href: "#",
          isExternal: true,
        },
      ],
    }));
  };

  const handleChannelChange = (index, field, value) => {
    setFormData((prev) => {
      const next = [...prev.channels];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, channels: next };
    });
  };

  const handleRemoveChannel = (index) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.filter((_, i) => i !== index),
    }));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    setFormData((prev) => {
      const next = [...prev.channels];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return { ...prev, channels: next };
    });
  };

  const handleMoveDown = (index) => {
    if (index === formData.channels.length - 1) return;
    setFormData((prev) => {
      const next = [...prev.channels];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return { ...prev, channels: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage({ text: "", isError: false });

    try {
      const res = await fetch("/api/dashboard/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (json.success) {
        setStatusMessage({ text: "Contact section updated successfully!", isError: false });
        if (json.data) {
          setFormData({
            eyebrow: json.data.eyebrow || "",
            leadText: json.data.leadText || "",
            channels: Array.isArray(json.data.channels) ? json.data.channels : [],
          });
        }
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
    return <div style={{ padding: "40px 0", color: "var(--text-2)" }}>Loading contact section...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "8px" }}>
            CMS Editor
          </span>
          <h1 className="serif" style={{ fontSize: "28px", fontWeight: "600" }}>
            Edit Contact Section
          </h1>
          <p className="sub" style={{ fontSize: "13.5px", marginTop: "6px" }}>
            Update lead copy text, email, links, and contact channels.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddChannel}
          className="btn btn-solid"
          style={{ padding: "10px 18px", fontSize: "13px" }}
        >
          + Add Contact Channel
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
        {/* Eyebrow & Lead Copy Container */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line-strong)",
            borderRadius: "16px",
            padding: "28px",
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
              placeholder="e.g. Get in touch"
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
              Lead Copy Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.leadText}
              onChange={(e) => setFormData({ ...formData, leadText: e.target.value })}
              placeholder="Enter lead paragraph..."
              style={{
                width: "100%",
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
          </div>
        </div>

        {/* Contact Channels List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {formData.channels.map((chan, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="mono" style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "600" }}>
                  Channel #{idx + 1}: {chan.label}
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
                    disabled={idx === formData.channels.length - 1}
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--line)",
                      color: "var(--text)",
                      borderRadius: "6px",
                      width: "28px",
                      height: "28px",
                      cursor: idx === formData.channels.length - 1 ? "default" : "pointer",
                      opacity: idx === formData.channels.length - 1 ? 0.3 : 1,
                    }}
                  >
                    &darr;
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveChannel(idx)}
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
                    Delete Channel
                  </button>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "12px" }}>
                <div>
                  <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                    Label
                  </label>
                  <input
                    type="text"
                    required
                    value={chan.label}
                    onChange={(e) => handleChannelChange(idx, "label", e.target.value)}
                    placeholder="e.g. EMAIL"
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
                    Display Value
                  </label>
                  <input
                    type="text"
                    required
                    value={chan.value}
                    onChange={(e) => handleChannelChange(idx, "value", e.target.value)}
                    placeholder="e.g. pateldishank19@gmail.com"
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
                    Action Button Label
                  </label>
                  <input
                    type="text"
                    value={chan.actionText || "Copy"}
                    onChange={(e) => handleChannelChange(idx, "actionText", e.target.value)}
                    placeholder="e.g. Copy / Visit"
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

              <div>
                <label className="mono" style={{ display: "block", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>
                  Link URL (href)
                </label>
                <input
                  type="text"
                  value={chan.href || "#"}
                  onChange={(e) => handleChannelChange(idx, "href", e.target.value)}
                  placeholder="e.g. mailto:pateldishank19@gmail.com"
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
          ))}
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
          {saving ? "Saving Contact Section..." : "Save Contact Section"}
        </button>
      </form>
    </div>
  );
}
