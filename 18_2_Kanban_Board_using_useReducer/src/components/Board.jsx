import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Column from "./Column";

export default function Board() {
  const { state } = useContext(TaskContext);

  return (
    <div className="flex flex-1 w-full gap-6 p-6 h-2/3">
      <Column title="Todo" status="todo" tasks={state.tasks.todo} />
      <Column title="In Progress" status="inProgress" tasks={state.tasks.inProgress} />
      <Column title="Done" status="done" tasks={state.tasks.done} />
    </div>
  );
}
