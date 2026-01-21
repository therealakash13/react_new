import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { SET_CURRENT_USER } from "../../context/actions";
import { setLocalStorage } from "../../utils/LocalStorage";

export default function Login() {
  const { dispatch } = useContext(TaskContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_CURRENT_USER, payload: { email, password } });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-10  bg-gray-700 rounded px-8 py-6">
        <h1 className="text-4xl font-semibold mb-2">Login</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
          <input
            value={email}
            className="bg-gray-500 outline-none px-5 py-2 rounded text-xl"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            value={password}
            className="bg-gray-500 outline-none px-5 py-2 rounded text-xl"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 py-1 rounded text-2xl font-medium cursor-pointer hover:bg-red-400 transition mt-4"
          >
            Login
          </button>
          <button
            onClick={() => {
              setLocalStorage();
              window.location.reload();
            }}
            className="bg-green-700 py-1 px-5 rounded text-2xl font-medium cursor-pointer hover:bg-green-800 transition mt-2"
          >
            Use Seed Data ( Demo )
          </button>
        </form>
      </div>
    </div>
  );
}
