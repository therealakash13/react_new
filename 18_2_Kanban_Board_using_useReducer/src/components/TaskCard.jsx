import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MOVE_TASK, DELETE_TASK } from "../context/action";

const statusStyles = {
  todo: "border-blue-400 bg-blue-50",
  inProgress: "border-yellow-400 bg-yellow-50",
  done: "border-green-400 bg-green-50",
};

const priorityStyles = {
  high: "bg-red-500",
  low: "bg-green-500",
};

export default function TaskCard({ task, status }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div
      className={`border-l-4 rounded-lg p-4 shadow-sm flex flex-col gap-2 ${statusStyles[status]}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <span
          className={`text-xs text-white px-2 py-1 rounded ${priorityStyles[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600">{task.description}</p>

      <div className="flex justify-end gap-2 mt-3">
        {status !== "done" && (
          <button
            onClick={() =>
              dispatch({
                type: MOVE_TASK,
                payload: {
                  from: status,
                  to: status === "todo" ? "inProgress" : "done",
                  taskId: task.id,
                },
              })
            }
            className="text-xs font-medium px-3 py-1 bg-indigo-600 text-white rounded cursor-pointer"
          >
            Move →
          </button>
        )}

        <button
          onClick={() =>
            dispatch({
              type: DELETE_TASK,
              payload: { status, taskId: task.id },
            })
          }
          className="text-xs font-medium px-3 py-1 bg-red-600 text-white rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
