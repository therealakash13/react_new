import { Outlet } from "react-router";
import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="h-screen w-7xl mx-auto py-5 flex flex-col ">
      <Header />
      <Outlet />
    </div>
  );
}
