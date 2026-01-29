import { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/cartContext";
import { ADD_TO_CART, DECREMENT_QTY, INCREMENT_QTY } from "../context/actions";
import { Minus, Plus } from "lucide-react";

export default function Products() {
  const { state, dispatch } = useContext(CartContext);
  const cartItem = (product) =>
    state.items.find((item) => item.id === product.id);

  return (
    <div className="flex-1 grid grid-cols-3 gap-6 font-redhat bg-gray-300 rounded-b overflow-y-auto py-4 ">
      {products.map((product) => {
        const itemInCart = cartItem(product);
        return (
          <div key={product.id} className=" p-4 rounded flex flex-col gap-2">
            <img
              className="w-full h-70 object-cover rounded-2xl overflow-hidden hover:scale-102 transition"
              src={product.image}
              alt={product.title}
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <span className="bg-cyan-400 px-4 py-0.5 rounded-xl text-sm font-medium">
                  ₹ {product.price}
                </span>
              </div>
              <div className="px-4">
                {!itemInCart ? (
                  <button
                    className="bg-yellow-400 text-lg px-5 py-2 rounded-full font-semibold cursor-pointer"
                    onClick={() =>
                      dispatch({ type: ADD_TO_CART, payload: product })
                    }
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        dispatch({ type: DECREMENT_QTY, payload: product.id })
                      }
                      className="bg-yellow-400 text-lg p-2 rounded-full font-semibold cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-semibold">
                      {itemInCart.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({ type: INCREMENT_QTY, payload: product })
                      }
                      className="bg-yellow-400 text-lg p-2 rounded-full font-semibold cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
