import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ReminderSlice from "./ReminderSlice";

export const store=configureStore({
    reducer:{
        ReminderSlice
    },
})