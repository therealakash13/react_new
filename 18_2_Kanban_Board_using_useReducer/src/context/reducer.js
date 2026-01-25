import { ADD_TASK, MOVE_TASK } from "./action";

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
      console.log(action.payload);
      return state;
    }

    default:
      return state;
  }
};

// add more actions
