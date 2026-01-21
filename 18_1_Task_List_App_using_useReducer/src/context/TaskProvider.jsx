import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { reducer } from "./taskReducer";
import { initialState } from "./initialState";

export const TaskProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(state.tasks.employees));
  }, [state.tasks.employees]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(state.auth.currentUser));
  }, [state.auth.currentUser]);

  return (
    <div>
      <TaskContext.Provider value={{state, dispatch}}>
        {children}
      </TaskContext.Provider>
    </div>
  );
};
