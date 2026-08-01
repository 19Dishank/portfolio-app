import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    type: { type: String, default: "Frontend Web-App" },
    year: { type: String, default: "2025" },
    technologies: [String],
    liveLink: { type: String, default: "#" },
    codeLink: { type: String, default: "#" },
    gradientStart: { type: String, default: "#2f5d4f" },
    gradientEnd: { type: String, default: "#8fd8bc" },
    isFeatured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
