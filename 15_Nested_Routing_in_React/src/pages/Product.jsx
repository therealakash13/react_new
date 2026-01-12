import { Link, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex justify-center">
        <Link className="px-5 py-3 bg-cyan-700 rounded-b text-black text-3xl font-semibold" to="/product/men">Men</Link>
        <Link className="px-5 py-3 bg-cyan-700 rounded-b text-black text-3xl font-semibold" to="/product/women">Women</Link>
      </div>
      <div className="flex flex-1 justify-center items-center h-full">
        <Outlet />
      </div>
    </div>
  );
}
