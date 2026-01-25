import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const init = () => {
  const stored = localStorage.getItem("kanban_tasks");
  return stored ? JSON.parse(stored) : initialState;
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("kanban_tasks", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
