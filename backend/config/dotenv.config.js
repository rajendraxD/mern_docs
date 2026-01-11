import dotenv from "dotenv";
dotenv.config();
const env = process.env;
const MONGODB_URL = env.MONGODB_URL || "mongodb://127.0.0.1:27017/";
const PORT = env.PORT || 8000;
const JWT_SECRET = env.JWT_SECRET || "secret";
export default env;
