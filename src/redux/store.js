import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import innerText from "./innerText";

export const store = configureStore({
  reducer: {
    counter,
    innerText,
  },
});
