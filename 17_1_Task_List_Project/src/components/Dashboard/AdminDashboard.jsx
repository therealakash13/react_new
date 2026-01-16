import AdminTaskListContainer from "../Misc/AdminTaskListContainer";
import CreateTask from "../Misc/CreateTask";
import Header from "../Misc/Header";

export default function AdminDashboard() {
  return (
    <div className="task-list flex flex-col h-full gap-10 overflow-y-auto">
      <Header />
      <CreateTask />
      <AdminTaskListContainer />
    </div>
  );
}
