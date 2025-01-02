import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDode, setIsDone] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/task`)
      .then((res) => {
        setTasks(res.data);
        localStorage.setItem("tasks", JSON.stringify(res.data));
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  function handleModal() {
    setOpen((prev) => !prev);
    setTitle("");
    setContent("");
  }

  function handleAddTask(title, content) {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/task`, { title, content })
      .then((res) => {
        const newTask = res.data;
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      })
      .catch((err) => console.error("Error adding task:", err));
  }

  return (
    <div className="w-screen flex items-center justify-center relative">
      <div className="flex flex-wrap gap-4 py-4 px-6 mt-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            content={task.content}
            date="20-jan-2024"
            isDone={task.isDode}
          />
        ))}
      </div>
      <div
        className="fixed bottom-16 right-6 w-14 h-14 flex items-center justify-center text-3xl font-bold bg-blue-400 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-500"
        onClick={handleModal}
      >
        +
      </div>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] flex flex-col gap-2 max-w-md border rounded p-10 bg-white shadow-md transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-2 px-2 flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600 mb-4">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter task"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-90 ">
              <div className="relative w-full min-w-[200px]">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className=" h-full min-h-[100px] w-full rounded-[7px] border border-blue-indigo-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-indigo-600 focus:border-t-transparent focus:outline-0"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                handleAddTask(title, content);
                handleModal();
              }}
            >
              Done
            </button>
            <button
              className=" py-2 px-2 absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
