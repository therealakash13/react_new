import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [employeesData] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : null;
  });

  const loginHandler = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminData = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminData) {
      const userData = { role: "admin", data: adminData };
      setUser(userData);
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      return;
    }

    const employeeData = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeData) {
      const userData = { role: "employee", data: employeeData };
      setUser(userData);
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      return;
    }

    alert("Incorrect email or password");
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    return;
  };

  return (
    <div>
      <AuthContext.Provider value={{ user, loginHandler, logoutHandler, employeesData }}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}
