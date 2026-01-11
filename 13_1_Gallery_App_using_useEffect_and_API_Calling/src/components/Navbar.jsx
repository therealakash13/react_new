export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-400 rounded-xl outline-0"
        />
      </div>
      <div className="flex gap items-center">
        <h3 className="text-xl border-2 border-gray-400 border-r-0 rounded-r-none pl-3 rounded-2xl">
          Akash
        </h3>
        <img
          className="w-14 h-14 rounded-full object-cover border-gray-400 border-2 border-l-0 p-1"
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
