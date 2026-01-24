import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
