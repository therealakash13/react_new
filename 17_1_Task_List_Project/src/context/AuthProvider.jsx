import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [employeesData, setEmployeesData] = useState(() => {
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

  const handleTasks = (taskDetails, assignTo) => {
    setEmployeesData((prevEmployees) => {
      if (!prevEmployees) return prevEmployees;

      const employeeExists = prevEmployees.find(
        (emp) => emp.email.toLowerCase() === assignTo.toLowerCase()
      );

      if (!employeeExists) {
        alert("No such employee exists.");
        return prevEmployees;
      }

      const updatedEmployees = prevEmployees.map((emp) => {
        if (emp.email.toLowerCase() !== assignTo.toLowerCase()) return emp;

        const newTask = {
          ...taskDetails,
          active: false,
          completed: false,
          failed: false,
          new: true,
        };

        const updatedTasks = [...emp.tasks, newTask];

        const taskCount = {
          active: updatedTasks.filter((t) => t.active).length,
          new: updatedTasks.filter((t) => t.new).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        };

        return { ...emp, tasks: updatedTasks, taskCount };
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          loginHandler,
          logoutHandler,
          employeesData,
          handleTasks,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

// Add task accept feature for employee as well. and more...