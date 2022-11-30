import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  userdetails: [],
  token:"",
};

export const UserSlice = createSlice({
  name: "usedetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.userdetails = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload
    }
  },
});

export const { setDetails,setToken } = UserSlice.actions;

export default UserSlice.reducer;
