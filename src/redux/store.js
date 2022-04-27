import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import innerText from "./innerText";
import { todos } from "./todo";

export const store = configureStore({
  reducer: {
    counter,
    innerText,
    todos,
  },
});
