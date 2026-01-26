import { ADD_TASK, DELETE_TASK, EDIT_TASK, MOVE_TASK } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          todo: [...state.tasks.todo, action.payload.todo],
        },
      };
    }

    case MOVE_TASK: {
      const { taskId, from, to } = action.payload;

      const task = state.tasks[from].find((t) => t.id === taskId);
      if (!task) return state;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [from]: state.tasks[from].filter((t) => t.id !== taskId),
          [to]: [...state.tasks[to], task],
        },
      };
    }

    case DELETE_TASK: {
      const { from, taskId } = action.payload;

      if (!state.tasks[from]) return state;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [from]: state.tasks[from].filter((t) => t.id !== taskId),
        },
      };
    }

    case EDIT_TASK: {
      const { from, taskId, title } = action.payload;

      return {  
        ...state,
        tasks: {
          ...state.tasks,
          [from]: state.tasks[from].map((task) =>
            task.id === taskId ? { ...task, title } : task,
          ),
        },
      };
    }

    default:
      return state;
  }
};

// add more actions
