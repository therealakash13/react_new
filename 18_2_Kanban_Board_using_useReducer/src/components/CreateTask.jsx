import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { ADD_TASK, REDO, UNDO } from "../context/action";
import { useContext } from "react";
import { nanoid } from "nanoid";

export default function CreateTask() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    const todo = {
      id: nanoid(),
      title,
      priority,
    };

    dispatch({ type: ADD_TASK, payload: { todo: todo } });
    setPriority("");
    setTitle("");
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="New task name"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 py-3 rounded placeholder:text-gray-500 bg-white outline-none"
      />
      <select
        name="priority"
        id="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="bg-white rounded px-2"
      >
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
      <button
        onClick={handleSubmit}
        className="px-5 py-3 bg-green-600 text-white font-semibold rounded cursor-pointer"
      >
        Create Task
      </button>
      <button
        onClick={() => dispatch({ type: UNDO })}
        className="bg-red-600 px-5 font-semibold text-white rounded-full cursor-pointer"
      >
        UNDO
      </button>
      <button
        onClick={() => dispatch({ type: REDO })}
        className="bg-green-800 px-5 font-semibold text-white rounded-full cursor-pointer"
      >
        REDO
      </button>
    </div>
  );
}
