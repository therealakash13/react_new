import { calculateTotals } from "../utils/utlis";
import {
  ADD_TO_CART,
  DECREMENT_QTY,
  INCREMENT_QTY,
  REMOVE_FROM_CART,
} from "./actions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case INCREMENT_QTY: {
      const product = action.payload;
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

    case DECREMENT_QTY: {
      const productId = action.payload;

      const updatedItems = state.items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);

      return calculateTotals({
        ...state,
        items: updatedItems,
      });
    }

    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const updatedItems = state.items.filter((i) => i.id !== productId);

      return calculateTotals({ ...state, items: updatedItems });
    }

    default:
      return state;
  }
};
