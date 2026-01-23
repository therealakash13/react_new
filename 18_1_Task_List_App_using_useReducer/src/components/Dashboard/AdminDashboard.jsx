import { useContext } from "react";
import AdminTaskListContainer from "../Misc/AdminTaskListContainer";
import CreateTask from "../Misc/CreateTask";
import Header from "../Misc/Header";
import RemovalRequests from "../Misc/RemovalRequests";
import { TaskContext } from "../../context/TaskContext";
import { APPROVE_TASK_REMOVAL, GET_REMOVAL_REQ } from "../../context/actions";

export default function AdminDashboard() {
  const { state, dispatch } = useContext(TaskContext);

  const handleRemoval = (id, taskId) => {
    if (state.auth.currentUser?.role !== "admin") {
      return alert("Unauthorized.");
    }

    dispatch({
      type: APPROVE_TASK_REMOVAL,
      payload: { employeeId: id, taskId },
    });
  };

  return (
    <div className="task-list flex flex-col h-full gap-10 overflow-y-auto">
      <Header />
      <CreateTask />
      <RemovalRequests
        handleRemoval={handleRemoval}
        list={state.admin.removalRequests}
      />
      <AdminTaskListContainer />
    </div>
  );
}
