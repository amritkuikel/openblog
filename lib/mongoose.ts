import mongoose from "mongoose";

const url = process.env.MONGO_URL;

export default async function mongooseConnect() {
  try {
    if (!url) {
      throw new Error("MongoDB URL is not defined");
    }

    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

