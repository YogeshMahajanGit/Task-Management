import Icon from "./Icon";
import Del from "../assets/delete.svg";

export default function TaskCard({
  title,
  content,
  date,
  isDone,
  id,
  onToggleStatus,
  onDelete,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div
      className={`flex justify-between gap-4 w-80 border rounded p-6  hover:shadow-md transition-all ease-in-out ${
        isDone ? "bg-green-100 border-green-400" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="">{content?.slice(0, 50)}</p>
        <span className="text-xs text-slate-500">{formatDate(date)}</span>
      </div>
      <div className="flex flex-col-reverse gap-8 p-2">
        <button
          className="hover:bg-red-400 rounded-md"
          onClick={() => onDelete(id)}
        >
          <Icon svg={Del} />
        </button>

        <div>
          <input
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            type="checkbox"
            checked={isDone}
            onChange={() => onToggleStatus(id, isDone)}
          />
        </div>
      </div>
    </div>
  );
}
