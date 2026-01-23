import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { reducer } from "./taskReducer";
import { initialState } from "./initialState";

export const TaskProvider = ({ children }) => {
  // const init = () => {
  //   return {
  //     ...initialState,
  //     tasks: {
  //       ...initialState.tasks,
  //       employees: JSON.parse(localStorage.getItem("employees")) || [],
  //     },
  //     auth: {
  //       currentUser: JSON.parse(localStorage.getItem("currentUser")),
  //     },
  //     admin: {
  //       removalRequests:
  //         JSON.parse(localStorage.getItem("adminRemovalRequests")) || [],
  //     },
  //   };
  // };
  // const init = () =>
  //   JSON.parse(localStorage.getItem("taskAppState")) || initialState;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(state.tasks.employees));
  }, [state.tasks.employees]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(state.auth.currentUser));
  }, [state.auth.currentUser]);

  useEffect(() => {
    localStorage.setItem(
      "adminRemovalRequests",
      JSON.stringify(state.admin.removalRequests),
    );
  }, [state.admin.removalRequests]);

  // useEffect(() => {
  //   localStorage.setItem("taskAppState", JSON.stringify(state));
  // }, [state]);

  return (
    <div>
      <TaskContext.Provider value={{ state, dispatch }}>
        {children}
      </TaskContext.Provider>
    </div>
  );
};
