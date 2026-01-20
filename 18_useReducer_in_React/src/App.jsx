import { useReducer, useState } from "react";
import reducer from "./reducer/reducer";

export default function App() {
  const [cart, dispatch] = useReducer(reducer, []);
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: { name: itemName } });
    setItemName("");
  };

  return (
    <div className="w-full h-screen bg-gray-800 text-white flex flex-col gap-5">
      <div className="w-7xl mx-auto my-10 flex flex-col gap-20">
        <h2 className="text-5xl">Cart using useReducer</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex justify-between gap-3 outline-2 outline-white px-6 py-4 items-center rounded"
        >
          <input
            className="w-[80%] border border-gray-300 rounded-2xl px-5 py-2"
            type="text"
            placeholder="Enter item name..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button
            className="w-[20%] bg-yellow-500 text-black px-5 py-2 rounded text-xl cursor-pointer"
            type="submit"
          >
            Add Item
          </button>
        </form>

        <div className="outline-2 outline-white px-6 py-4 flex flex-col gap-5">
          <h2 className="text-2xl">Cart Items ({cart.length})</h2>

          {cart.length > 0 ? (
            cart.map((item, idx) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded border-gray-500 px-5 py-1"
              >
                <h3>
                  {idx + 1}. {item.itemName}
                </h3>
                <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload: {id: item.id}})} className="bg-red-500 px-3 py-1 rounded-full cursor-pointer">
                  Remove
                </button>
              </div>
            ))
          ) : (
            <h3 className="text-xl text-gray-400">No Items in cart</h3>
          )}
          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="w-full bg-green-600 rounded-full py-2 cursor-pointer"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}
