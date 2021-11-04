import { createSlice } from "@reduxjs/toolkit";
import Reminder from "../Models/reminder.model";

const initialState={
    reminders:[
        new Reminder('Redux Test','Clean Garage',600),
        new Reminder('Cool Remidner',"Garage needs to be cleaned",120),
        new Reminder('Woah god job',"Doing good",60)
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