import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, default: "Frontend" },
    expertise: { type: Number, default: 70 },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
