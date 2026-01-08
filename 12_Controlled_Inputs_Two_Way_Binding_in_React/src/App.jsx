import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", name);

    setName("");
  };

  return (
    <>
      <div className="main">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
