import { PackageSearch, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/cartContext";
export default function Header() {
  const {state}=useContext(CartContext);
  return (
    <nav className="flex items-center justify-around">
      <Link
        to="/"
        className="text-5xl font-bold font-quicksand bg-gray-300 w-1/2 py-4 rounded-t flex justify-center items-center gap-3 border-b-3 border-gray-800"
      >
        <PackageSearch size={60} />
        Products
      </Link>
      <Link
        to="/cart"
        className="relative text-5xl font-bold font-quicksand  w-1/2 py-4 rounded-t flex justify-center items-center gap-3 border-b-3 border-gray-800"
      >
        <ShoppingCart size={60} />
        Shopping Cart
        <span className="absolute top-4 right-20 bg-red-600 rounded-full px-2 text-lg">{state.totalItems}</span>
      </Link>
    </nav>
  );
}
