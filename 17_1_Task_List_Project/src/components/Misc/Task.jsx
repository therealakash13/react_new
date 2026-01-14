export default function Task() {
  return (
    <div className="flex gap-7 flex-col h-5/6 w-80 rounded shrink-0 bg-green-700 px-7 py-8">
      <div className="flex justify-between w-full  ">
        <h2 className="px-5 py-2 text-sm bg-red-600 rounded font-semibold">
          High
        </h2>{" "}
        <span className="text-lg font-semibold">14 Jan 2026</span>
      </div>
      <h2 className="text-3xl font-bold  mt-4">Create a task project</h2>
      <p className="text-lg font-normal text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam
        nisi, reiciendis eum amet vel.
      </p>
    </div>
  );
}
