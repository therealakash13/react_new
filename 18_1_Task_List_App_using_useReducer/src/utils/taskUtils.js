import { SORTERS } from "../context/sorters";

export const taskSorter = (tasks = [], basis) => {
  const STATUS_ORDER = Object.freeze({
    new: 1,
    active: 2,
    completed: 3,
    failed: 4,
  });

  const PRIORITY_ORDER = Object.freeze({
    high: 1,
    low: 2,
  });

  switch (basis) {
    case SORTERS.PRIORITY:
      return [...tasks].sort(
        (a, b) =>
          PRIORITY_ORDER[a.taskPriority?.toLowerCase()] -
          PRIORITY_ORDER[b.taskPriority?.toLowerCase()],
      );

    case SORTERS.TYPE:
      return [...tasks].sort(
        (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status],
      );

    case SORTERS.DEFAULT:
      return [...tasks];

    case SORTERS.DUE_DATE:
      return [...tasks].sort(
        (a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate),
      );

    default:
      return [...tasks];
  }
};

export const getTaskCount = (employees, email) => {
  const employee = employees.find((emp) => emp.email === email);

  if (!employee || !employee.tasks) {
    return { new: 0, active: 0, completed: 0, failed: 0 };
  }

  return employee.tasks.reduce(
    (acc, task) => {
      acc[task.status] += 1;
      return acc;
    },
    { new: 0, active: 0, completed: 0, failed: 0 },
  );
};