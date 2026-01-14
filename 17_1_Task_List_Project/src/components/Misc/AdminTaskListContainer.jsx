import AdminTask from "./AdminTask";

export default function AdminTaskListContainer() {
  return (
    <div className="task-list flex-1 flex flex-col gap-2 overflow-y-auto">
      <AdminTask />
    </div>
  );
}
