import Board from "./components/Board";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-full h-screen font-roboto flex flex-col items-center gap-8 bg-[url(/bg.jpg)] bg-cover">
      <Header />
      <CreateTask />
      <Board />
    </div>
  );
}
