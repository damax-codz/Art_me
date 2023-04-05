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
 
   
    resetPost: (state) => {
      state.posts = [];
    },
 
   
  },
});

export const { setPost, resetPost} = PostSlice.actions;

export default PostSlice.reducer;
