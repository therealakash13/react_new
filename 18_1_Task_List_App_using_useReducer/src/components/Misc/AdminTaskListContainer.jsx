import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";
import { getTaskCount } from "../../utils/taskUtils";

export default function AdminTaskListContainer() {
  const { state } = useContext(TaskContext);
  const employees  = state.tasks.employees; 

  return (
    <div className="flex-1 flex flex-col">
      <div className="grid grid-cols-5 text-center font-semibold text-xl text-gray-300">
        <p className="bg-gray-700  py-3 ">Employee</p>
        <p className="bg-cyan-800  py-3 ">New</p>
        <p className="bg-green-700 py-3 ">Completed</p>
        <p className="bg-gray-100 text-gray-700  py-3 ">Active</p>
        <p className="bg-rose-700  py-3">Failed</p>
      </div>
      {employees.map((employee) => {
        const counts = getTaskCount(employees, employee.email);

        return (
        <div key={employee.id} className="grid grid-cols-5 text-center text-lg font-normal">
          <p className="bg-gray-700 py-3 px-2 border-t">{employee.employeeName}</p>
          <p className="bg-cyan-800 py-3 px-2 border-t">{counts.new}</p>
          <p className="bg-green-700 py-3 px-2 border-t">{counts.completed}</p>
          <p className="bg-gray-100 text-gray-700 py-3 px-2 border-t">{counts.active}</p>
          <p className="bg-rose-700 py-3 px-2 border-t">{counts.failed}</p>
        </div>
      )})}
    </div>
  );
}
