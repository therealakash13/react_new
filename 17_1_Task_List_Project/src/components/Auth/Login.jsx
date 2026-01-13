import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-6 border border-gray-600 rounded px-8 py-6">
        <h1 className="text-4xl font-semibold mb-2">Login</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
          <input
            value={email}
            className="bg-gray-500 outline-none px-5 py-2 rounded-full text-xl"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            value={password}
            className="bg-gray-500 outline-none px-5 py-2 rounded-full text-xl"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 py-1 rounded-full text-2xl font-medium cursor-pointer hover:bg-red-400 transition mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
