import mongoose from "mongoose";
import env from "./dotenv.config.js";
// import { MONGODB_URL } from "./dotenv.config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
