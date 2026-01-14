export default function CreateTaskForm() {
  return (
    <form className="flex w-full justify-between py-7 px-2">
      <div className="flex flex-col w-1/2 px-6 gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Task Title</h3>
          <input
            type="text"
            placeholder="Design a website"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Date</h3>
          <input
            type="date"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Assign to</h3>
          <input
            type="text"
            placeholder="Employee name"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Category</h3>
          <input
            type="text"
            placeholder="design, dev, etc"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
          />
        </div>
      </div>
      <div className=" flex flex-col w-1/2 px-6 justify-between">
        <div className="flex gap-2 flex-col ">
          <h3 className="text-gray-300 font-medium">Description</h3>
          <textarea
            name=""
            id=""
            rows={7}
            cols={60}
            className="border rounded px-4 py-2 text-xl outline-none"
            placeholder="Task description..."
          ></textarea>
        </div>
        <button className="bg-green-800 py-2 rounded font-semibold cursor-pointer">
          Create Task
        </button>
      </div>
    </form>
  );
}
