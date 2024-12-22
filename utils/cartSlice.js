import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    }
    ,reducers:
    {
        addItem:(state,action)=>
        {
            state.items.push(action.payload)

        },
        clearAll:(state)=>
        {
            state.items.length=0

        }
        ,clear:(state)=>
        {
state.items.pop();
        }
    }
})
export const {addItem,clear,clearAll}=cartSlice.actions
export default cartSlice.reducer