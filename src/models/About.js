import mongoose from "mongoose";

const FactSchema = new mongoose.Schema({
  label: String,
  num: String,
});

const AboutSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, default: "A little about me" },
    heading: {
      type: String,
      default: "Grounded in fundamentals, particular about details.",
    },
    paragraphs: [String],
    facts: [FactSchema],
  },
  { timestamps: true }
);

export default mongoose.models.About || mongoose.model("About", AboutSchema);
