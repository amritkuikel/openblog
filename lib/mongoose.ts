import mongoose from "mongoose";


let isConnected: boolean = false;

export const mongooseConnect = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL)
    return console.log("Missing environment variable: MONGODB_URL");

  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "DevHub",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
