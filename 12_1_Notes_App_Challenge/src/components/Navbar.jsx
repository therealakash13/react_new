import { Menu, Search } from "../assets/SVGComponents";

export default function Navbar() {
  return (
    <div className="p-6 flex justify-between font-outfit">
      {/* <h1 className="text-5xl font-semibold w-fit">My Notes</h1> */}
      <span className="flex items-center border-2 border-border px-3 rounded-2xl bg-surface">
        <Search className="icon" />{" "}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 outline-0 font-medium"
        />
      </span>
      <div className="flex gap-7 items-center">
        <div className="flex items-center gap-3">
          <span className="text-xl border-border border rounded-full px-4">Akash</span>
          <img
            className="main-icon rounded-full object-cover border-border border"
            src="https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <Menu className="icon cursor-pointer" />
      </div>
    </div>
  );
}
