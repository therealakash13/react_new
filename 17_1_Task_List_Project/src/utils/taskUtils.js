export const getTaskCount = (tasks = []) => {
  return tasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    { new: 0, active: 0, completed: 0, failed: 0 }
  );
};

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
    case "priority":
      return [...tasks].sort(
        (a, b) =>
          PRIORITY_ORDER[a.taskPriority?.toLowerCase()] -
          PRIORITY_ORDER[b.taskPriority?.toLowerCase()]
      );

    case "type":
      return [...tasks].sort(
        (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      );

    case "default":
      return [...tasks];

    default:
      return [...tasks];
  }
};
