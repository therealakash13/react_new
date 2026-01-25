import TaskCard from "./TaskCard";

export default function Column({ title, tasks, status }) {
  return (
    <div className="flex-1 bg-gray-100 rounded-lg p-4 overflow-y-auto">
      <h2 className="font-bold text-xl mb-4">{title}</h2>

      <div className="flex flex-col gap-4">
        {tasks.length === 0 && (
          <p className="text-sm text-gray-400 font-semibold">No tasks</p>
        )}

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} status={status} />
        ))}
      </div>
    </div>
  );
}
