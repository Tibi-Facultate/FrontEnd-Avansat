import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.reducer";
import redirectReducer from "./redirect.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    redirect: redirectReducer,
  },
});
