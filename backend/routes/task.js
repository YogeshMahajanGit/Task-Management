import express from "express";
import {
  handleCreateTask,
  handleDeleteTask,
  handleEditTask,
  handleGetAllTask,
} from "../controllers/task.js";

const taskRouter = express.Router();

taskRouter.get("/task", handleGetAllTask);
taskRouter.post("/task", handleCreateTask);
taskRouter.put("/task/:id", handleEditTask);
taskRouter.delete("/task/:id", handleDeleteTask);

export default taskRouter;
