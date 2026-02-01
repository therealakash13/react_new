import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating Sum....");
    let i = 0;
    for (i = 0; i < 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  return <div>{total}</div>;
};

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <ExpensiveComponent />
      <button onClick={() => setCount((prev) => prev + 1)}>Re-Render</button>
      <p>Parent Re-Render: {count}</p>
    </div>
  );
}
