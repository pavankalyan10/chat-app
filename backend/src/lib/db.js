import mongoose from "mongoose";
import { ENV } from "./env";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) {
      throw Error("MONGO_URI is not set");
    }
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("mongodb connected...", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB", error);
    process.exit(1);
  }
};
