import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { CHANGE_SORT } from "../../context/actions";
import {SORTERS} from '../../context/sorters';

export default function Sorter() {
  const { dispatch } = useContext(TaskContext);
  return (
    <div className="flex justify-end gap-5 items-center">
      <h2 className="text-2xl">Sort by</h2>
      <div className=" flex gap-3">
        <button
          onClick={() => dispatch({ type:CHANGE_SORT, payload:{ sortBy: SORTERS.PRIORITY } })}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Priority
        </button>
        <button
          onClick={() => dispatch({ type:CHANGE_SORT,payload:{ sortBy: SORTERS.TYPE } })}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Type
        </button>
        <button
          onClick={() => dispatch({ type:CHANGE_SORT,payload:{ sortBy: SORTERS.DUE_DATE } })}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Due Date
        </button>
      </div>
    </div>
  );
}
