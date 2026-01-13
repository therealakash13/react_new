export default function EmployeeDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-gray-300">
        Hello 👋,
        <br />
        <span className="text-4xl text-white ">Akash</span>
        <br />
        Welcome... 😊
      </h1>

      <div className="grid grid-cols-4 gap-3 px-4">
        <div className="flex items-center justify-center h-30 bg-green-700 rounded-2xl gap-10 text-gray-300"><span className="text-6xl font-bold font-white">1</span> Completed <br/> Task</div>
        <div className="flex items-center justify-center h-30 bg-gray-700 rounded-2xl gap-10 text-gray-300"><span className="text-6xl font-bold font-white">2</span> Accepted <br/> Task</div>
        <div className="flex items-center justify-center h-30 bg-red-600 rounded-2xl gap-10 text-gray-300"><span className="text-6xl font-bold font-white">3</span> Failed <br/> Task</div>
        <div className="flex items-center justify-center h-30 bg-blue-700 rounded-2xl gap-10 text-gray-300"><span className="text-6xl font-bold font-white">4</span> New <br/> Task</div>
      </div>
    </div>
  );
}
