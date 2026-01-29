import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import {
  DECREMENT_QTY,
  INCREMENT_QTY,
  REMOVE_FROM_CART,
} from "../context/actions";
import { Minus, Plus } from "lucide-react";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="flex flex-col flex-1 bg-gray-300 font-redhat">
      <div className="w-full">
        <ul className="grid grid-cols-4 items-center justify-center place-items-center text-gray-600">
          <li className="px-6 py-2 text-xl font-semibold">Item</li>
          <li className="px-6 py-2 text-xl font-semibold">Category</li>
          <li className="px-6 py-2 text-xl font-semibold">Quantity</li>
          <li className="px-6 py-2 text-xl font-semibold">Action</li>
        </ul>
      </div>

      {state.items.length > 0 ? (
        state.items.map((i) => (
          <div key={i.id} className="w-full">
            <ul className="grid grid-cols-4 items-center justify-center">
              <li className="flex items-center gap-3 px-6 py-2 text-xl font-medium">
                <img
                  className="w-16 h-16 object-cover rounded-lg"
                  src={i.image}
                  alt=""
                />
                {i.title}
              </li>
              <li className="px-6 py-2 text-xl capitalize text-center">
                {i.category}
              </li>
              <li className="px-6 py-2">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      dispatch({ type: DECREMENT_QTY, payload: i.id })
                    }
                    className="bg-yellow-400 text-lg p-2 rounded-full font-semibold cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-xl font-semibold">{i.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: INCREMENT_QTY, payload: i })
                    }
                    className="bg-yellow-400 text-lg p-2 rounded-full font-semibold cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </li>
              <li className="px-6 py-2 text-xl flex w-full items-center justify-center">
                <button
                  onClick={() =>
                    dispatch({ type: REMOVE_FROM_CART, payload: i.id })
                  }
                  className="bg-rose-600 font-semibold px-5 py-1.5 text-lg rounded-full text-white cursor-pointer"
                >
                  Remove
                </button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <div className="h-full flex items-center justify-center text-xl font-semibold text-gray-600">
          No items in cart.
        </div>
      )}
    </div>
  );
}
// Design cart page and sync item added to products on products page
