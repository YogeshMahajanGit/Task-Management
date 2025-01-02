let tasks = [];

function handleSendTask(req, res) {
  return res.status(200).json(tasks);
}

function handleCreateTask(req, res) {
  const { title, content, isDone } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title, content is required" });
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const newTask = {
    id: Date.now(),
    title,
    content,
    isDone: isDone || false,
    date: formattedDate,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
}

function handleEditTask(req, res) {
  const { id } = req.params;
  const { isDone } = req.body;

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.isDone = isDone;
  res.status(200).json(task);
}

function handleDeleteTask(req, res) {
  const { id } = req.params;

  tasks = tasks.filter((task) => task.id !== parseInt(id));
  res.status(200).json({ message: "Task deleted" });
}

export { handleSendTask, handleCreateTask, handleEditTask, handleDeleteTask };
