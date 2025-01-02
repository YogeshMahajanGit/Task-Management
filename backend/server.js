import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.js";
// import {taskRou}

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000 || process.env.PORT;

// GET all tasks
app.get("/", (req, res) => {
  res.send("Welcome Developer");
});

//Routes
app.use("/api", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
