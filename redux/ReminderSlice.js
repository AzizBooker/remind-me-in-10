import { createSlice } from "@reduxjs/toolkit";
import Reminder from "../Models/reminder.model";

const initialState={
    reminders:[
        new Reminder('This is a test reminder','testing if this function works',600,'abc'),
        new Reminder('second test reminder','to test if function works',200,'cba')
    ]
       
}

export const ReminderSlice=createSlice({
    name:"reminder",
    initialState:initialState,
    reducers:{
        AddReminder:(state,action)=>{
            state.reminders.push(action.payload)
        },
        // TODO 1 Create FindReminderByUUID Function
        FindReminderByUUID:(state,action)=>{
             return state.reminders.find(reminder=>reminder.uuid==action.payload)
        }
    }
})

export const {AddReminder,FindReminderByUUID}=ReminderSlice.actions

export default ReminderSlice.reducer;

