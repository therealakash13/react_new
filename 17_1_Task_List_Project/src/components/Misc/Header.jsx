export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-gray-300">
        Hello 👋,
        <br />
        <span className="text-4xl text-white font-bold">Akash</span>
      </h1>

      <button className="bg-red-700 px-5 py-3 rounded text-lg font-semibold cursor-pointer">
        Logout
      </button>
    </div>
  );
}
