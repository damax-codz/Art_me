import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logvalue: false,
  }


  export const LoggedSlice = createSlice({
      name:"logged",
      initialState,
      reducers:{
          loggedIn : (state) => {
              state.logvalue = true
          }
      }
  })

  export const { loggedIn } = LoggedSlice.actions

  export default LoggedSlice.reducer