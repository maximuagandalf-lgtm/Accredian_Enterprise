import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Reused across hot reloads in dev and across warm serverless invocations,
// so we don't open a new connection on every request.
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Missing MONGODB_URI environment variable. Copy .env.local.example to .env.local and fill in your connection string."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
