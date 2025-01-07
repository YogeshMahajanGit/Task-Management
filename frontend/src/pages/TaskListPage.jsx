import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import axios from "axios";

export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/task`
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    loadTasks();
  }, [tasks]);

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/task/${id}`, {
        isDone: !currentStatus,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, isDone: !currentStatus } : task
        )
      );
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/task/${id}`);

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 py-4 px-6 mt-6">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            content={task.description}
            date={task.createdAt}
            isDone={task.isDone}
            id={task._id}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
