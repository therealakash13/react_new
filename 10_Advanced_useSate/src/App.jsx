import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({ username: "Akash", age: 25 });
  const [arr, setArr] = useState([10, 20, 30]);

  function changeObject() {
    setUser((prev) => ({ ...prev, age: 27 }));
  }

  function changeArray() {
    setArr((prev) => prev.map((num) => num * 2));
  }

  return (
    <>
      <div className="main">
        <h1>
          {user.username}, {user.age}
        </h1>

        <h1>{arr.join(" ")}</h1>

        <button onClick={changeObject}>Change Age</button>
        <button onClick={changeArray}>Change Numbers</button>
      </div>
    </>
  );
}
