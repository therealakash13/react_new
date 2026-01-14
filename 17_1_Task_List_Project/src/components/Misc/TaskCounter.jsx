export default function TaskCounter() {
  return (
    <div className="grid grid-cols-4 gap-3 px-4">
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-green-700 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">1</span> Completed{" "}
        <br /> Task
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-gray-100 rounded gap-10 text-gray-700 font-semibold">
        <span className="text-8xl font-bold font-white">2</span> Accepted <br />{" "}
        Task
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-rose-700 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">3</span> Failed <br />{" "}
        Task
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-cyan-800 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">4</span> New <br /> Task
      </div>
    </div>
  );
}
