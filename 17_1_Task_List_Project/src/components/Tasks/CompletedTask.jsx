import { getPriorityColor } from "../../utils/colorUtils";

export default function CompletedTask({
  title,
  description,
  priority,
  date,
  category,
}) {
  return (
    <div className="relative flex gap-7 flex-col h-5/6 w-80 rounded shrink-0 px-7 py-8 bg-[#008235]">
      <div className="flex justify-between w-full items-center gap-2">
        <span className={`${getPriorityColor(priority)} px-5 py-2 text-sm rounded font-semibold text-white`}>
          {priority}
        </span>
        <span className="text-lg font-semibold">
          {new Date(date).toLocaleDateString("en-IN")}
        </span>
      </div>
      <h2 className="text-3xl font-bold  mt-4 truncate">{title}</h2>
      <p className="text-lg font-medium text-gray-600 bg-gray-400 px-5 py-3 rounded-2xl">
        {description}
      </p>
      <p className="absolute bottom-2 right-3 text-sm font-semibold truncate">
        #{category}
      </p>
    </div>
  );
}
