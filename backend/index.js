import express from "express";
import connectDB from "./config/database.config.js";
import cors from "cors";
import env from "./config/dotenv.config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api is running...");
});
``;
app.listen(env.PORT, async () => {
  await connectDB();
  ``;
  console.log("Server is running on port", env.PORT);
});
