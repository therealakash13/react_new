// import { nanoid } from "nanoid";
import { getLocalStorage } from "../utils/LocalStorage";
import {
  GET_REMOVAL_REQ,
  GET_TASK_COUNT,
  LOGOUT,
  SET_CURRENT_USER,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      const { employees, admin } = getLocalStorage();

      const adminData = admin.find(
        (a) =>
          a.email === action.payload.email &&
          a.password === action.payload.password,
      );

      if (adminData) {
        return {
          ...state,
          auth: {
            currentUser: {
              role: "admin",
              email: adminData.email,
              id: adminData.id,
              name: adminData.adminName,
            },
          },
        };
      }

      const employeeData = employees.find(
        (e) =>
          e.email === action.payload.email &&
          e.password === action.payload.password,
      );

      if (employeeData) {
        return {
          ...state,
          auth: {
            currentUser: {
              role: "employee",
              email: employeeData.email,
              id: employeeData.id,
              name: employeeData.employeeName,
            },
          },
          ui: {
            sortBy: state.ui.sortBy ?? "default",
          },
        };
      }

      return state;
    }

    case LOGOUT: {
      return {
        ...state,
        auth: { currentUser: null },
      };
    }

    case GET_REMOVAL_REQ: {
      if (state.auth.currentUser?.role !== "admin") return state;

      const removalRequests = state.tasks.employees.flatMap((emp) =>
        emp.tasks
          .filter((task) => task.removalRequested)
          .map((task) => ({
            taskId: task.id,
            taskTitle: task.taskTitle,
            employeeEmail: emp.email,
            employeeName: emp.employeeName,
            requestedAt: task.removalRequestedAt,
          })),
      );

      return {
        ...state,
        admin: { removalRequests },
      };
    }


    default:
      break;
  }

  //   const addTask = (taskDetails, assignTo) => {
  //     setEmployeesData((prevEmployees) => {
  //       if (!prevEmployees) return prevEmployees;

  //       const employeeExists = prevEmployees.find(
  //         (emp) => emp.email.toLowerCase() === assignTo.toLowerCase(),
  //       );

  //       if (!employeeExists) {
  //         alert("No such employee exists."); // ui should handle it.
  //         return prevEmployees;
  //       }

  //       const updatedEmployees = prevEmployees.map((emp) => {
  //         if (emp.email.toLowerCase() !== assignTo.toLowerCase()) return emp;

  //         const newTask = {
  //           ...taskDetails,
  //           status: "new",
  //           id: nanoid(),
  //           creationDate: new Date().toISOString().split("T")[0],
  //         };

  //         if (new Date(newTask.dueDate) < new Date(newTask.creationDate)) {
  //           return emp; // UI should show toast
  //         }

  //         const updatedTasks = [...emp.tasks, newTask];

  //         const taskCount = {
  //           active: updatedTasks.filter((t) => t.status === "active").length,
  //           new: updatedTasks.filter((t) => t.status === "new").length,
  //           completed: updatedTasks.filter((t) => t.status === "completed")
  //             .length,
  //           failed: updatedTasks.filter((t) => t.status === "failed").length,
  //         };

  //         return { ...emp, tasks: updatedTasks, taskCount };
  //       });
  //       return updatedEmployees;
  //     });
  //   };

  //   const handleTaskStatus = (email, taskId, status) => {
  //     setEmployeesData((prev) =>
  //       prev.map((emp) =>
  //         emp.email === email
  //           ? {
  //               ...emp,
  //               tasks: emp.tasks.map((task) =>
  //                 task.id === taskId ? { ...task, status } : task,
  //               ),
  //             }
  //           : emp,
  //       ),
  //     );
  //   };

  //   const handleTaskRemoval = (email, taskId) => {
  //     setEmployeesData((prev) =>
  //       prev.map((emp) =>
  //         emp.email === email
  //           ? {
  //               ...emp,
  //               tasks: emp.tasks.map((task) =>
  //                 task.id === taskId &&
  //                 ["completed", "failed"].includes(task.status)
  //                   ? {
  //                       ...task,
  //                       removalRequested: true,
  //                       removalRequestedAt: new Date()
  //                         .toISOString()
  //                         .split("T")[0],
  //                     }
  //                   : task,
  //               ),
  //             }
  //           : emp,
  //       ),
  //     );
  //   };

  //   const approveTaskRemoval = (email, taskId) => {
  //     setEmployeesData((prev) =>
  //       prev.map((emp) =>
  //         emp.email === email
  //           ? {
  //               ...emp,
  //               tasks: emp.tasks.filter(
  //                 (task) => !(task.id === taskId && task.removalRequested),
  //               ),
  //             }
  //           : emp,
  //       ),
  //     );
  //   };

  //   const getEmployeeTasks = (email, id) => {
  //     const employee = employeesData.find(
  //       (e) => e.email === email || e.id === id,
  //     );
  //     if (!employee) return [];
  //     return employee.tasks;
  //   };

  //   const changeSort = (value) => {
  //     setUser((prev) => (prev ? { ...prev, sortBy: value } : prev));
  //   };
};

// Complete this ....