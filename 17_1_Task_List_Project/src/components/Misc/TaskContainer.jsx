import Task from "./Task";

export default function TaskContainer() {
  return (
    <div className="task-list flex-1 flex items-end flex-nowrap overflow-x-auto gap-5 w-full">
      <Task />
    </div>
  );
}
