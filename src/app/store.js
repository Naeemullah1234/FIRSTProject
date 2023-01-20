import { configureStore } from "@reduxjs/toolkit";
import  showDaata  from "../features/showSlice";

export const store = configureStore({
    reducer : {
        show : showDaata,
    },
});