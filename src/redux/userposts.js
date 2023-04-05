import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  userposts: [],
};

export const userPostSlice = createSlice({
  name: "userposts",
  initialState,
  reducers: {
    setUserPost: (state, action) => {
      state.userposts = action.payload;
    },
  },
});

export const { setUserPost } = userPostSlice.actions;

export default userPostSlice.reducer;
