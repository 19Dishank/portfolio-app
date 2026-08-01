import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: String,
    startDate: String,
    endDate: String,
    description: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
