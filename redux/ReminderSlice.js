import { createSlice } from "@reduxjs/toolkit";
import priorityEnum from "../Enums/priority.enum";
import Reminder from "../Models/reminder.model";

const initialState={
    reminders:[
        new Reminder('This is a test reminder','testing if this function works',600,'abc'),
        new Reminder('second test reminder','to test if function works',200,'cba',priorityEnum.p2),
        new Reminder('Clean Dishes','This is a priority 1 Task',600,'bads',priorityEnum.p1)
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

