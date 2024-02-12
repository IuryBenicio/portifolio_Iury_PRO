import { configureStore } from "@reduxjs/toolkit";
import transitionReducer from "./reducers/transition";
import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    transition: transitionReducer,
    user: userReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
