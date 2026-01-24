import { ADD_TASK } from "./action";

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
  }
};

// Make ui and add more actions
