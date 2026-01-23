export const initialState = {
  tasks: {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
  },
  auth: {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  },
  admin: {
    removalRequests:
      JSON.parse(localStorage.getItem("adminRemovalRequests")) || [],
  },
  ui: {
    sortBy: "default",
  },
};
