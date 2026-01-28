import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { cartReducer } from "./reducer";
import { initialCartState } from "./initialState";

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
