export const initialState = JSON.parse(
  localStorage.getItem("kanban_tasks"),
) || {
  past: [],
  present: {
    tasks: {
      todo: [],
      inProgress: [],
      done: [],
    },
  },
  future: [],
};
