import { createSlice } from "@reduxjs/toolkit";
import priorityEnum from "../Enums/priority.enum";
import Reminder from "../Models/reminder.model";

const initialState={
    reminders:[
        new Reminder({title:'Clean Bathroom',duration:600}),
        
    ]
       
}

export const ReminderSlice=createSlice({
    name:"reminder",
    initialState:initialState,
    reducers:{
        AddReminder:(state,action)=>{
            state.reminders.push(action.payload)
        },
        // TODO 1C Create FindReminderByUUID Function
        FindReminderByUUID:(state,action)=>{
             return state.reminders.find(reminder=>reminder.uuid==action.payload)
        }
    }
})

export const {AddReminder,FindReminderByUUID}=ReminderSlice.actions

export default ReminderSlice.reducer;

