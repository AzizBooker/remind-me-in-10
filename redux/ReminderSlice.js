import { createSlice } from "@reduxjs/toolkit";
import Reminder from "../Models/reminder.model";

const initialState={
    reminders:[
        new Reminder('Redux Test','This is to taste the redux state is being pulled',"11:00")
    ]
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