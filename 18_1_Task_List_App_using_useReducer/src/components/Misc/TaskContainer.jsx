import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import ActiveTask from "../Tasks/ActiveTask";
import NewTask from "../Tasks/NewTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";

import { taskSorter } from "../../utils/taskUtils";
import { SET_TASK_REMOVAL, SET_TASK_STATUS } from "../../context/actions";

export default function TaskContainer() {
  const { state, dispatch } = useContext(TaskContext);

  const getEmployeeTasks = (email, id) => {
    const employee = state.tasks.employees.find(
      (e) => e.email === email || e.id === id,
    );

    if (!employee) return [];
    return employee.tasks;
  };

  const tasks = getEmployeeTasks(state.auth.currentUser?.email, state.auth.currentUser?.id);
  const sortedTasks = taskSorter(tasks, state.ui.sortBy);

  const handleRemoval = (taskId,taskTitle) => {
    if (!state.auth.currentUser || state.auth.currentUser.role !== "employee") return alert("Unauthorized.");

    const requestedAt  = new Date().toISOString().split("T")[0];    
    dispatch({ type:SET_TASK_REMOVAL, payload:{ taskId,  requestedAt, employeeId: state.auth.currentUser?.id, taskTitle } });
  };

  const handleStatus = (taskId, status) => {
    if (!state.auth.currentUser || state.auth.currentUser.role !== "employee") return alert("Unauthorized.");
    dispatch({ type: SET_TASK_STATUS ,payload:{ taskId, status } });
  };

  return (
    <div className="task-list flex-1 flex items-center flex-nowrap overflow-x-auto gap-5 w-full px-4">
      {sortedTasks.map((task, idx) => {
        switch (task.status) {
          case "active":
            return (
              <ActiveTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleStatus={handleStatus}
              />
            );

          case "new":
            return (
              <NewTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleStatus={handleStatus}
              />
            );

          case "completed":
            return (
              <CompletedTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleRemoval={handleRemoval}
                isRequested={task.removalRequested}
                requestedAt={task.removalRequestedAt}
              />
            );

          case "failed":
            return (
              <FailedTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleRemoval={handleRemoval}
                isRequested={task.removalRequested}
                requestedAt={task.removalRequestedAt}
              />
            );
          default:
            break;
        }
      })}
    </div>
  );
}
