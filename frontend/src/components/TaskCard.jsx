import Icon from "./Icon";

export default function TaskCard({
  title,
  date,
  content,
  isDone,
  onEdit,
  onDelete,
}) {
  return (
    <div className=" w-80 border rounded p-4 bg-white hover:shadow-md transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-medium">{title}</h4>
        <span className="text-xs text-slate-500">{date}</span>
      </div>
      <div>
        <Icon />
      </div>
      <div className="flex items-center mb-4">
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="checkbox"
          checked={isDone}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">
          Check do sume checkbox
        </label>
      </div>
      <p className="">{content?.slice(0, 50)}</p>
    </div>
  );
}
