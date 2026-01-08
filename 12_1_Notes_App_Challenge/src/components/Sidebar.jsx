import { NotePen, Add, Calender, Archive, Trash } from "../assets/SVGComponents";

export default function Sidebar() {
  return (
    <div className="w-1/6 h-full p-6 pb-0 flex flex-col justify-between">
      <div>
        <div>
          <h1 className="flex gap-2 text-2xl items-center text-accent font-extrabold font-outfit">
            <NotePen className="main-icon" /> MeMoir
          </h1>
        </div>
        <div className="mt-10">
          <ul className="sidebar-list font-inter font-medium">
            <li className="gap-3">
              <Add className="icon" />
              Add Note
            </li>
            <li className="gap-3">
              <Calender className="icon" />
              Calender
            </li>
            <li className="gap-3">
              <Archive className="icon" /> Archive
            </li>
            <li className="gap-3">
              <Trash className="icon" /> Trash
            </li>
          </ul>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img src="https://plus.unsplash.com/premium_vector-1732660552503-80f0bd206ac1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
}
