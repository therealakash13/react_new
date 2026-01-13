import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

export default function App() {
  return (
    <div className="text-2xl font-google w-screen h-screen bg-gray-800 text-white px-4 py-3">
      {/* <Login /> */}
      <EmployeeDashboard />
    </div>
  );
}
