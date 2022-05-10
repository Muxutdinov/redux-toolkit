import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(res.data));
  }
);

export const deletePostById = createAsyncThunk(
  "posts/deletePostById",
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id))
  }
);

const initialState = {
  posts: [],
};

export const Posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
     state.posts = state.posts.filter((value) => value.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log("getPosts:fulfilled"),
    [getPosts.pending]: () => console.log("getPosts:pending"),
    [getPosts.rejected]: () => console.log("getPosts:rejected"),
    [deletePostById.fulfilled]: () => console.log("deletePostById:fulfilled"),
    [deletePostById.pending]: () => console.log("deletePostById:pending"),
    [deletePostById.rejected]: () => console.log("deletePostById:rejected"),
  },
});


export const { setPosts, deletePost } = Posts.actions;
export default Posts.reducer;
