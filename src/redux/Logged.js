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
          },
          loggedOut : (state) => {
            state.logvalue = false
          }
      }
  })

  export const { loggedIn,loggedOut } = LoggedSlice.actions

  export default LoggedSlice.reducer