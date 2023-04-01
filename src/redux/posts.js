import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  posts: [],
};

export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
   
  },
});

export const { setPost} = PostSlice.actions;

export default PostSlice.reducer;
