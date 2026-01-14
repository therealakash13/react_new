import AdminTaskListContainer from "../Misc/AdminTaskListContainer";
import CreateTask from "../Misc/CreateTask";
import Header from "../Misc/Header";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col h-full gap-10">
      <Header />
      <CreateTask />
      <AdminTaskListContainer />
    </div>
  );
}
