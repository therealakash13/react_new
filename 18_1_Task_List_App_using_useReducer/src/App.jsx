import { useContext } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { TaskContext } from "./context/TaskContext";

export default function App() {
  const { state } = useContext(TaskContext);

  return (
    <div className="text-2xl font-quicksand w-screen h-screen bg-gray-800 text-white px-8 py-10">
      {!state.auth.currentUser && <Login />}

      {state.auth.currentUser?.role === "admin" && <AdminDashboard />}
      {state.auth.currentUser?.role === "employee" && <EmployeeDashboard />}
    </div>
  );
}
