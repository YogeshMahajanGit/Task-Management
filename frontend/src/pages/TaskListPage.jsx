import TaskCard from "../components/TaskCard";

export default function TaskListPage({ tasks = [] }) {
  return (
    <div>
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
    </div>
  );
}
