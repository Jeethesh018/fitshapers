import { createSlice } from "@reduxjs/toolkit";



const loginSlice = createSlice({
   name : "login",
   initialState : {
    userDetails :{},
    username :""
   },
   reducers : {
       saveUser: (state,action) => {
          state.userDetails = action.payload
       },
       saveName: (state,action) => {
        state.username = action.payload
     },
     
   }
})


export const {saveUser,saveName} = loginSlice.actions
export default loginSlice.reducer