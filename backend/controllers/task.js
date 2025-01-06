import Task from "../models/task.js";

async function handleCreateTask(req, res) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const task = await Task.create({ title, description });
    res.status(201).json({ message: "Task created", task });
  } catch (error) {
    res.status(500).json({ message: "Failed to create task", error });
  }
}

async function handleGetAllTask(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks", error });
  }
}

async function handleEditTask(req, res) {
  const { id } = req.params;
  const { isDone } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { isDone }, { new: true });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task Updated", task });
  } catch (error) {
    res.status(500).json({ message: "Failed to update task", error });
  }
}

async function handleDeleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task", error });
  }
}

export { handleCreateTask, handleGetAllTask, handleEditTask, handleDeleteTask };
