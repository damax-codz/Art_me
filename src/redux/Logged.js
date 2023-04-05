import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logvalue: null,
  }


  export const LoggedSlice = createSlice({
      name:"logged",
      initialState,
      reducers:{
          logged : (state,action) => {
              state.logvalue = action.payload
          },
    
      }
  })

  export const { logged } = LoggedSlice.actions

  export default LoggedSlice.reducer