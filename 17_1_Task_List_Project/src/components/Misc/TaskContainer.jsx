import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ActiveTask from "../Tasks/ActiveTask";
import NewTask from "../Tasks/NewTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";
import { taskSorter } from "../../utils/taskUtils";

export default function TaskContainer() {
  const { user } = useContext(AuthContext);
  const tasks = user.data.tasks;

  const sortedTasks = taskSorter(tasks, user.sortBy);

  return (
    <div className="task-list flex-1 flex items-center flex-nowrap overflow-x-auto gap-5 w-full">
      {sortedTasks.map((task, idx) => {
        switch (task.status) {
          case "active":
            return (
              <ActiveTask
                key={idx}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.creationDate}
                category={task.category}
                status={task.status}
              />
            );

          case "new":
            return (
              <NewTask
                key={idx}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.creationDate}
                category={task.category}
                status={task.status}
              />
            );

          case "completed":
            return (
              <CompletedTask
                key={idx}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.creationDate}
                category={task.category}
                status={task.status}
              />
            );

          case "failed":
            return (
              <FailedTask
                key={idx}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.creationDate}
                category={task.category}
                status={task.status}
              />
            );
          default:
            break;
        }
      })}
    </div>
  );
}
