import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "innerText",
  initialState: { firstname: "firstname", lastname:"lastname" },
  reducers: {
    typefirst: (state, action) => {
      state.firstname = action.payload;
    },
    typesecond: (state, action) => {
      state.lastname = action.payload;
    },
  },
});

export const { typefirst,typesecond } = textSlice.actions;
export default textSlice.reducer;
