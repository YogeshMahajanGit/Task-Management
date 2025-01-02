import express from "express";
import {
  handleCreateTask,
  handleDeleteTask,
  handleEditTask,
  handleSendTask,
} from "../controllers/task.js";

const taskRouter = express.Router();

taskRouter.get("/task", handleSendTask);
taskRouter.post("/task", handleCreateTask);
taskRouter.put("/task/:id", handleEditTask);
taskRouter.delete("/task/:id", handleDeleteTask);

export default taskRouter;
