import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function handleAddTask(e) {
    e.preventDefault();
    navigate("/add-tasks");
  }
  return (
    <div className="w-screen flex items-center justify-center relative">
      <button
        className="fixed bottom-16 right-6 w-14 h-14 flex items-center justify-center text-3xl font-bold bg-blue-400 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-500"
        onClick={handleAddTask}
      >
        +
      </button>
    </div>
  );
}
