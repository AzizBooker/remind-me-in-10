import { createSlice } from "@reduxjs/toolkit";
import priorityEnum from "../Enums/priority.enum";
import { v4 as uuidGen } from "uuid"
const initialState={
    reminders:[

       ]
       
}

export const ReminderSlice=createSlice({
    name:"reminder",
    initialState:initialState,
    reducers:{
        AddReminder:(state,action)=>{
        const {title,description,priority,duration}= action.payload
          state.reminders.push({uuid:uuidGen(),title,description,duration,priority,paused:false})
        },
        FindReminderByUUID:(state,action)=>{
             return state.reminders.find(reminder=>reminder.uuid==action.payload)
        },
        testReminder:(state,action)=>{
            console.log('test')
        }
    }
})

export const {AddReminder,FindReminderByUUID,testReminder}=ReminderSlice.actions


export default ReminderSlice.reducer;

