import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => ({
        payload: { id: nanoid(), completed: false, text },
      }),
    },
    deleteTask: {
      reducer: (state, action) =>
        state.filter(({ id }) => id !== action.payload),
    },

    toggleCompleted: {
      reducer: (state, action) =>
        state.map(task =>
          task.id !== action.payload
            ? task
            : { ...task, completed: !task.completed }
        ),
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
