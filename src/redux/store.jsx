import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from './Slices/CartSlice';

export const store = configureStore({
    reducer :{
        cart : CartSliceReducer,
    }
})