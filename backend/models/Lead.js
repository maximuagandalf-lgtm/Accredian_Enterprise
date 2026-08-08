import mongoose from "mongoose";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: [true, "Work email is required."],
      trim: true,
      lowercase: true,
      maxlength: 200,
      match: [EMAIL_RE, "Enter a valid email address."],
    },
    company: {
      type: String,
      required: [true, "Company name is required."],
      trim: true,
      maxlength: 150,
    },
    phone: { type: String, trim: true, maxlength: 40, default: "" },
    teamSize: { type: String, trim: true, maxlength: 30, default: "" },
    message: { type: String, trim: true, maxlength: 1000, default: "" },
  },
  { timestamps: true }
);

// Reuse the compiled model across hot reloads instead of redefining it,
// which would otherwise throw "Cannot overwrite model once compiled".
export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
