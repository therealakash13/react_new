import {
  ADD_TASK,
  APPROVE_TASK_REMOVAL,
  CHANGE_SORT,
  LOGOUT,
  SET_CURRENT_USER,
  SET_TASK_REMOVAL,
  SET_TASK_STATUS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case SET_CURRENT_USER: {
      const { email, password } = action.payload;
      const admins =  JSON.parse(localStorage.getItem("admin"));

      const adminData = admins.find(
        a => a.email === email && a.password === password
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

      const employeeData = state.tasks.employees.find(
        e => e.email === email && e.password === password
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
        };
      }

      return state;
    }

    case LOGOUT:
      return {
        ...state,
        auth: { currentUser: null },
      };

    case ADD_TASK: {
      const { assignTo, task } = action.payload;

      const updatedEmployees = state.tasks.employees.map(emp =>
        emp.email.toLowerCase() === assignTo.toLowerCase()
          ? { ...emp, tasks: [...emp.tasks, task] }
          : emp
      );

      return {
        ...state,
        tasks: {
          ...state.tasks,
          employees: updatedEmployees,
        },
      };
    }

    case SET_TASK_STATUS: {
      const { taskId, status } = action.payload;
      const userId = state.auth.currentUser.id;

      const updatedEmployees = state.tasks.employees.map(emp =>
        emp.id !== userId
          ? emp
          : {
              ...emp,
              tasks: emp.tasks.map(t =>
                t.id === taskId ? { ...t, status } : t
              ),
            }
      );

      return {
        ...state,
        tasks: {
          ...state.tasks,
          employees: updatedEmployees,
        },
      };
    }

    case SET_TASK_REMOVAL: {
      const { taskId, requestedAt, employeeId, taskTitle } = action.payload;

      const updatedEmployees = state.tasks.employees.map(emp =>
        emp.id !== employeeId
          ? emp
          : {
              ...emp,
              tasks: emp.tasks.map(t =>
                t.id === taskId &&
                ["completed", "failed"].includes(t.status)
                  ? {
                      ...t,
                      removalRequested: true,
                      removalRequestedAt: requestedAt,
                    }
                  : t
              ),
            }
      );

      const exists = state.admin.removalRequests.some(
        r => r.taskId === taskId
      );

      const newRequest = {
        taskId,
        taskTitle,
        employeeId,
        employeeName: state.auth.currentUser?.name,
        requestedAt,
      };

      return {
        ...state,
        tasks: {
          ...state.tasks,
          employees: updatedEmployees,
        },
        admin: {
          ...state.admin,
          removalRequests: exists
            ? state.admin.removalRequests
            : [...state.admin.removalRequests, newRequest],
        },
      };
    }

    case APPROVE_TASK_REMOVAL: {
      const { employeeId, taskId } = action.payload;

      const updatedEmployees = state.tasks.employees.map(emp =>
        emp.id !== employeeId
          ? emp
          : {
              ...emp,
              tasks: emp.tasks.filter(t => t.id !== taskId),
            }
      );

      const updatedRequestList = state.admin.removalRequests.filter( r => r.taskId !== taskId )

      return {
        ...state,
        tasks: {
          ...state.tasks,
          employees: updatedEmployees,
        },
        admin:{
          ...state.admin,
          removalRequests: updatedRequestList
        }
      };
    }

    case CHANGE_SORT:
      return {
        ...state,
        ui: {
          ...state.ui,
          sortBy: action.payload.sortBy,
        },
      };

    default:
      return state;
  }
};
