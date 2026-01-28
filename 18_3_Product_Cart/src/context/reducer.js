import { calculateTotals } from "../utils/utlis";
import { ADD_TO_CART } from "./actions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload;
      console.log(product);

      const existing = state.items.find((i) => i.id === product.id);

      let updatedItems;

      if (existing) {
        updatedItems = state.items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }

      return calculateTotals({ ...state, items: updatedItems });
    }

    //     case "REMOVE_FROM_CART": {
    //       const updatedItems = state.items.filter((i) => i.id !== action.payload);

    //       return calculateTotals({ ...state, items: updatedItems });
    //     }

    //     default:
    //       return state;
  }
};
