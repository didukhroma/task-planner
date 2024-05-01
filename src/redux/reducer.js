//redux
// import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from "./actions";
import { statusFilters } from "./constants";

//redux
const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(({ id }) => {
//         return id !== action.payload;
//       });

//     case toggleCompleted.type:
//       return state.map(task =>
//         task.id !== action.payload
//           ? task
//           : { ...task, completed: !task.completed }
//       );
//     default:
//       return state;
//   }
// };

export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder
    .addCase(addTask, (state, action) => state.push(action.payload))
    .addCase(deleteTask, (state, action) =>
      state.filter(({ id }) => id !== action.payload)
    )
    .addCase(toggleCompleted, (state, action) =>
      state.map(task =>
        task.id !== action.payload
          ? task
          : { ...task, completed: !task.completed }
      )
    );
});

const filtersInitialState = {
  status: statusFilters.all,
};

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         filters: { status: action.payload },
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => ({
    ...state,
    status: action.payload,
  }));
});
