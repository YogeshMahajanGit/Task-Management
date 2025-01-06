import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskRouter from "./routes/task.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
connectDB();

const PORT = 5000 || process.env.PORT;

// Demo
app.get("/", (req, res) => {
  res.send("Welcome Developer");
});

//Routes
app.use("/api", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
