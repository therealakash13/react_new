import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  return (
    <>
      <div className="w-full h-screen text-gray-700 bg-[url(https://images.unsplash.com/photo-1551554781-c46200ea959d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
        <div className="w-3xl mx-auto py-10 flex flex-col gap-6 items-center justify-center">
          <h2 className="text-5xl font-semibold">Counter</h2>
          <h1 className="text-7xl font-bold">{num}</h1>
          <div className="flex gap-10">
            <button
              onClick={increment}
              className="w-fit px-6 py-4 rounded-2xl bg-gray-600 text-white font-semibold text-2xl text-center"
            >
              Increase
            </button>
            <button
              onClick={decrement}
              className="w-fit px-6 py-4 rounded-2xl bg-gray-600 text-white font-semibold text-2xl text-center"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
