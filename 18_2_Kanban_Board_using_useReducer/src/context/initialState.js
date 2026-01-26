export const initialState = JSON.parse(localStorage.getItem("kanban_tasks")) || {
  tasks: {
    todo: [],
    inProgress: [],
    done: [],
  },
};
