import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, default: "Portfolio — Frontend Developer" },
    firstName: { type: String, default: "Dishank" },
    lastName: { type: String, default: "Patel." },
    roleText: {
      type: String,
      default:
        "I'm a frontend developer working in React, Tailwind CSS and JavaScript — building things people actually rely on.",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
