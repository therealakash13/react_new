import { useEffect, useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("This only runs when A changes");
  }, [a]);

  return (
    <div>
      <h1>Hello</h1>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b + 1)}>Change B</button>
    </div>
  );
}
