import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state,actions) => {
            state.push(actions.payload);
         },
        remove: (state,actions) => { 
            return state.filter((item)=>item.id !== actions.payload)
        },
        empty: (state) => {
            return state = []
        }
    }
})
export const { add, remove,empty }= CartSlice.actions;
export default CartSlice.reducer  