import Icon from "./Icon";
import Del from "../assets/delete.svg";
import Edit from "../assets/edit.svg";

export default function TaskCard({
  title,
  date,
  content,
  isDone = false,
  onEdit,
  onDelete,
}) {
  return (
    <div className=" flex gap-4 w-80 border rounded p-6 bg-white hover:shadow-md transition-all ease-in-out">
      <div className=" flex flex-col  gap-6 ">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="">{content?.slice(0, 50)}</p>
        <span className="text-xs text-slate-500">{date}</span>
      </div>
      <div className="flex flex-col-reverse gap-8 p-2 ">
        <Icon svg={Del} />

        <div className="">
          <input
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            type="checkbox"
            checked={isDone}
          />
        </div>
        <Icon svg={Edit} />
      </div>
    </div>
  );
}
