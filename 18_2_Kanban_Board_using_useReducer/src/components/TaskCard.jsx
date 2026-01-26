import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { MOVE_TASK, DELETE_TASK, EDIT_TASK } from "../context/action";

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
  const [title, setTitle] = useState(task.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    dispatch({
      type: EDIT_TASK,
      payload: { from: status, taskId: task.id, title: title },
    });
  };

  return (
    <div
      className={`border-l-4 rounded-lg p-4 shadow-sm flex flex-col gap-2 ${statusStyles[status]}`}
    >
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            onBlur={handleSave}
            className="w-4/5 font-semibold text-gray-800"
          />
        ) : (
          <h3
            onDoubleClick={() => setIsEditing(true)}
            className="font-semibold text-gray-800 w-full truncate"
          >
            {task.title}.
          </h3>
        )}

        <span
          className={`text-xs text-white px-2 py-1 rounded ${priorityStyles[task.priority]}`}
        >
          {task.priority.toUpperCase()}
        </span>
      </div>

      <p className="text-sm text-gray-600">{task.description}</p>

      <div className="flex justify-end gap-2 mt-3">
        {status !== "todo" && (
          <button
            onClick={() =>
              dispatch({
                type: MOVE_TASK,
                payload: {
                  from: status,
                  to: status === "inProgress" ? "todo" : "inProgress",
                  taskId: task.id,
                },
              })
            }
          >
            <span
              style={{ fontSize: "20px" }}
              className="material-symbols-outlined cursor-pointer rounded-full bg-blue-500 p-1.5 text-white"
            >
              arrow_back_ios_new
            </span>
          </button>
        )}

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
          >
            <span
              style={{ fontSize: "20px" }}
              className="material-symbols-outlined cursor-pointer rounded-full bg-blue-500 p-1.5 text-white"
            >
              arrow_forward_ios
            </span>
          </button>
        )}

        <button
          onClick={() =>
            dispatch({
              type: DELETE_TASK,
              payload: { from: status, taskId: task.id },
            })
          }
        >
          <span
            style={{ fontSize: "20px" }}
            className="material-symbols-outlined cursor-pointer rounded-full bg-red-500 p-1.5 text-white"
          >
            delete_forever
          </span>
        </button>

        <button onClick={() => setIsEditing(true)}>
          <span
            style={{ fontSize: "20px" }}
            className="material-symbols-outlined cursor-pointer rounded-full bg-gray-500 p-1.5 text-white"
          >
            edit
          </span>
        </button>
      </div>
    </div>
  );
}
