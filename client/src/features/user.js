import { createSlice } from '@reduxjs/toolkit'

const initilaStateValue={name:"",id:"",image:""}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initilaStateValue },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state,action)=>{
            state.value=initilaStateValue
        }
    }
})

export const {login,logout}=userSlice.actions;

export default userSlice.reducer;