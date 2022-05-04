import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

export const { onAdd } = todoSlice.actions;
export default todoSlice.reducer;
