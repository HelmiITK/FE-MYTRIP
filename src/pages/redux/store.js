import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
// import { thunk } from "redux-thunk";

export default configureStore({
  reducer: rootReducer,
  // devTools: import.meta.env.VITE_MODE !== "production",
  devTools: import.meta.env.MODE === "development",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
