import { createSlice } from "@reduxjs/toolkit";

const initialState={
    reminders:[]
}

export const ReminderSlice=createSlice({
    name:"reminder",
    initialState:initialState,
    reducers:{
        AddReminder:(state,reminder)=>{
            state.reminders.push(payload.payload)
        }
    }
})

export default ReminderSlice.reducer