import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name:'innerText',
    initialState:{text:''},
    reducers:{
        typefirst:(state,action)=>{
             state.innerText += action.payload
        }
    }
})

export const {typefirst} = textSlice.actions
export default textSlice.reducer