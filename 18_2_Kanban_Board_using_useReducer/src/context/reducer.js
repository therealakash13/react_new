import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
  REDO,
  UNDO,
} from "./action";

export const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case UNDO: {
      if (!past.length) return state;

      const previous = past[past.length - 1];

      return {
        past: past.slice(0, -1),
        present: previous,
        future: [present, ...future],
      };
    }

    case REDO: {
      if (!future.length) return state;

      const next = future[0];

      return {
        past: [...past, present],
        present: next,
        future: future.slice(1),
      };
    }

    default: {
      const newPresent = appReducer(present, action);

      if (newPresent === present) return state;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }
  }
};

const appReducer = (state, action) => {
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
