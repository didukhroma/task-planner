// import { nanoid } from "nanoid";

import { createAction, nanoid } from "@reduxjs/toolkit";

// export const addTask = text => ({
//   type: "tasks/addTask",
//   payload: {
//     id: nanoid(),
//     completed: false,
//     text,
//   },
// });

// export const deleteTask = taskId => ({
//   type: "tasks/deleteTask",
//   payload: taskId,
// });

// export const toggleCompleted = taskId => ({
//   type: "tasks/toggleCompleted",
//   payload: taskId,
// });

// export const setStatusFilter = value => ({
//   type: "filters/setStatusFilter",
//   payload: value,
// });

export const addTask = createAction("tasks/addTask", text => ({
  payload: { id: nanoid(), completed: false, text },
}));
export const deleteTask = createAction("tasks/deleteTask", taskId => ({
  payload: taskId,
}));
export const toggleCompleted = createAction(
  "tasks/toggleCompleted",
  taskId => ({
    payload: taskId,
  })
);
export const setStatusFilter = createAction(
  "filters/setStatusFilter",
  value => ({
    payload: value,
  })
);
