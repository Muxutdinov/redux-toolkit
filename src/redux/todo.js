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
    toggleCompleted: (state, action) => {
      const toggleTodo = state.todo.find((item) => item.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    onDelete: (state, action) => {
      const newData = state.todo.filter((item) => item.id !== action.payload);
      state.todo = newData
    },
  },
}); 

export const { onAdd, toggleCompleted, onDelete } = todoSlice.actions;
export default todoSlice.reducer;
