import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.config.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api is running...");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on port", process.env.PORT);
});
