import { useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
    } else if (email === "employee@me.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="text-2xl font-quicksand w-screen h-screen bg-gray-800 text-white px-8 py-10">
      {!user ? <Login loginHandler={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
}
