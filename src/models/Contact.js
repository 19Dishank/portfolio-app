import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
  label: String,
  value: String,
  actionText: String,
  href: String,
  isExternal: Boolean,
});

const ContactSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, default: "Get in touch" },
    leadText: {
      type: String,
      default:
        "If you're building something and want a hand on the frontend — I'd like to hear about it.",
    },
    channels: [ChannelSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
