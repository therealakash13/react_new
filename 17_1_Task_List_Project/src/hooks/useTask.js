import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useTasks = () => {
  const { setEmployeesData } = useContext(AuthContext);

  const addTask = (taskDetails, assignTo) => {
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
          status: "new",
        };

        const updatedTasks = [...emp.tasks, newTask];

        const taskCount = {
          active: updatedTasks.filter((t) => t.status === "active").length,
          new: updatedTasks.filter((t) => t.status === "new").length,
          completed: updatedTasks.filter((t) => t.status === "completed")
            .length,
          failed: updatedTasks.filter((t) => t.status === "failed").length,
        };

        return { ...emp, tasks: updatedTasks, taskCount };
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  return { addTask };
};
