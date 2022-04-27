import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: { todo: [] },
  reducers: {
    onAdd: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { onAdd } = todoSlice.actions;
export default todoSlice.reducer;
