import { createSlice } from "@reduxjs/toolkit";
import priorityEnum from "../Enums/priority.enum";


const initialState={
    reminders:[   
       ]
       
}

export const ReminderSlice=createSlice({
    name:"reminder",
    initialState:initialState,
    reducers:{
        AddReminder:(state,action)=>{
            state.reminders.push(action.payload)
        },
        FindReminderByUUID:(state,action)=>{
             return state.reminders.find(reminder=>reminder.uuid==action.payload)
        }
    }
})

export const {AddReminder,FindReminderByUUID}=ReminderSlice.actions


export default ReminderSlice.reducer;

