import { useContext, useEffect } from "react";
import AdminTaskListContainer from "../Misc/AdminTaskListContainer";
import CreateTask from "../Misc/CreateTask";
import Header from "../Misc/Header";
import RemovalRequests from "../Misc/RemovalRequests";
import { TaskContext } from "../../context/TaskContext";
import { GET_REMOVAL_REQ } from "../../context/actions";

export default function AdminDashboard() {
  const { state, dispatch } = useContext(TaskContext);

  // const handleRemoval = (email, taskId) => {
  //   if (state.currentUser?.role !== "admin") {
  //     return alert("Unauthorized.");
  //   }

  //   approveTaskRemoval(email, taskId);
  // };

  useEffect(() => {
    dispatch({ type: GET_REMOVAL_REQ });
  }, [dispatch]);

  return (
    <div className="task-list flex flex-col h-full gap-10 overflow-y-auto">
      <Header />
      <CreateTask />
      <RemovalRequests
        //  handleRemoval={handleRemoval}
        list={state.admin.removalRequests}
      />
      <AdminTaskListContainer />
    </div>
  );
}
