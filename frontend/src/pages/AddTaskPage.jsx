import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddTaskPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      navigate("/");
    }
  }, [isOpen, navigate]);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  async function handleFetchAllTask(e) {
    e.preventDefault();

    const newTask = {
      title,
      description,
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/task`, newTask);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data.message);
      setError(error.response.data.message);
      console.error("Error adding task:", error);
    }
  }
  return (
    <>
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            onClick={handleClick}
          >
            <div
              className="relative w-[90%] flex flex-col gap-2 max-w-md border rounded p-10 bg-white shadow-md transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-2 px-2 flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600 mb-4">
                <input
                  type="text"
                  placeholder="Enter task"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {error && <span className="text-red-400">{error}</span>}
              <div className="w-90 mt-2">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className=" h-full min-h-[100px] w-full rounded-[7px] border border-blue-indigo-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-indigo-600 focus:border-t-transparent focus:outline-0"
                    placeholder="Message"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={handleFetchAllTask}
              >
                Done
              </button>

              <button
                className=" py-2 px-2 absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
