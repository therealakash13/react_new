import { useContext } from "react";
import Task from "./Task";
import { AuthContext } from "../../context/AuthContext";

export default function TaskContainer() {
  const { user } = useContext(AuthContext);
  const tasks = user.data.tasks;

  const sortedTasks = tasks.sort((a,b)=>{
    if(a.taskPriority.toLowerCase() === "high" && b.taskPriority.toLowerCase() === "low") return -1;
    if(a.taskPriority.toLowerCase() === "low" && b.taskPriority.toLowerCase() === "high") return 1;
    return 0;
  })

  return (
    <div className="task-list flex-1 flex items-end flex-nowrap overflow-x-auto gap-5 w-full">
      {sortedTasks.map((task, idx) => (
        <Task
          key={idx}
          title={task.taskTitle}
          description={task.taskDescription}
          priority={task.taskPriority}
          date={task.creationDate}
          category={task.category}
          status={
            task.active
              ? "active"
              : task.new
              ? "new"
              : task.completed
              ? "completed"
              : task.failed
              ? "failed"
              : "unknown"
          }
          isNew={task.new}
        />
      ))}
    </div>
  );
}
