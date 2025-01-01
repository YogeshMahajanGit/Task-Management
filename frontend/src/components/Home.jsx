import { useState } from "react";
import TaskCard from "./TaskCard";

export default function Home() {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="w-screen flex items-center justify-center relative">
      <div className="flex flex-wrap gap-4 py-4 px-6">
        <TaskCard
          title="test"
          content="new stask or we do not have in world"
          date="20-dec-2025"
          isDone={true}
        />
        <TaskCard
          title="To-Do Fask"
          content="new stask or we do not have in world"
          date="20-dec-2024"
          isDone={false}
        />
        <TaskCard
          title="Chenge value"
          content="new stask or we do not have in world lorean value are good"
          date="20-jan-2024"
          isDone={true}
        />
      </div>

      <div
        className="w-12 h-12 text-4xl flex items-center justify-center font-semibold  bg-blue-400 rounded-full right-4 absolute cursor-pointer"
        onClick={handleModal}
      >
        +
      </div>
    </div>
  );
}
