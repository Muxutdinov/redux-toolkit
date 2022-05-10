import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import innerText from "./innerText";
import todos from "./todo";
import Posts from "./Post";

export const store = configureStore({
  reducer: {
    counter,
    innerText,
    todos,
    Posts,
  },
});
