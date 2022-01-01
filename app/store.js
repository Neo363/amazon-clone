import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slices/basketSlice";


// This is the global store
export const store = configureStore({
    reducer: {
        basket: basketSlice,
    }
});