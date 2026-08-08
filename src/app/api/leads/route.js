import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export const dynamic = "force-dynamic";

function badRequest(message, fieldErrors) {
  return NextResponse.json({ ok: false, message, fieldErrors }, { status: 400 });
}

function sanitize(value, maxLen = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest("Request body must be valid JSON.");
  }

  // Honeypot: real users never fill this hidden field, bots usually do.
  if (sanitize(body.company_website)) {
    // Pretend success so bots don't learn the field is a trap.
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const payload = {
    name: sanitize(body.name, 120),
    email: sanitize(body.email, 200).toLowerCase(),
    company: sanitize(body.company, 150),
    phone: sanitize(body.phone, 40),
    teamSize: sanitize(body.teamSize, 30),
    message: sanitize(body.message, 1000),
  };

  try {
    await dbConnect();
    const lead = await Lead.create(payload);
    return NextResponse.json({ ok: true, lead: { id: lead._id.toString() } }, { status: 201 });
  } catch (err) {
    if (err.name === "ValidationError") {
      const fieldErrors = {};
      for (const [field, detail] of Object.entries(err.errors)) {
        fieldErrors[field] = detail.message;
      }
      return badRequest("Please fix the errors below.", fieldErrors);
    }
    console.error("Failed to store lead:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong on our end. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ ok: true, count: leads.length, leads });
  } catch (err) {
    console.error("Failed to read leads:", err);
    return NextResponse.json(
      { ok: false, message: "Could not load leads." },
      { status: 500 }
    );
  }
}
