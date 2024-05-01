//redux
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

//RTK
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";
// import { filtersReducer, rootReducer, tasksReducer } from "./reducer";
//SLICE

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
