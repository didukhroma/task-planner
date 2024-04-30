import { nanoid } from "nanoid";

export const addTask = text => ({
  type: "tasks/addTask",
  payload: {
    id: nanoid(),
    completed: false,
    text,
  },
});

export const deleteTask = taskId => ({
  type: "tasks/deleteTask",
  payload: taskId,
});

export const toggleCompleted = taskId => ({
  type: "tasks/toggleCompleted",
  payload: taskId,
});

export const setStatusFilter = value => ({
  type: "filters/setStatusFilter",
  payload: value,
});
