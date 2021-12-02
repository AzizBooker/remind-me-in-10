import priorityEnum from "../Enums/priority.enum"
import { v4 as uuidGen } from "uuid"
import * as BackgroundFetch from 'expo-background-fetch';

//TODO 3 Implement Countdown Function
//TODO 4 Function Called on Countdown End
//TODO 6 Push Noticaction Shown on Countdown End
export default class Reminder{

    
    constructor({title,description="",duration,isPaused=false,uuid=uuidGen(),priority=priorityEnum.p3}){
    this.uuid=uuid
    this.title=title
    this.description=description
    this.duration=duration
    this.priority=priority
    this.countdownIntervalID
    this.init()
    }

    init(){
        this.startCountdown()
    }

    
    startCountdown(){
      this.countdownIntervalID=setInterval(()=>{
          this.DecrementDuration()
      },100)
    }
    DecrementDuration(){
        this.duration=this.duration-1
    }

    getUUID(){
        return this.uuid
    }
    //Natural => NONE ;stub
    // sets uuid ;purpose
    setUUID(uuid){
        this.uuid=uuid
    }
    getTitle(){
        return this.title
    }
    setTitle(newTitle){
        this.title=newTitle
    }
    getDescription(){
       return this.description
    }
    setDescription(newDescription){
        this.description=newDescription
    }
    getPriority(){
        return this.priority
    }
    setPriority(newPriority){
        this.priority=newPriority
    }
    //None=>Natural ;stub
    //Return duration in seconds
    getDuration(){
        console.log(this.getFormattedTime())
        return this.duration
    }
    
    getFormattedTime(){
        var min=0
        var sec=0
        sec=this.duration%60
        min=(this.duration-sec)/60
        return `${min}:${this.formatSeconds(sec)}`
        
    }

    formatSeconds(sec){
    
        if(sec==0){
            return '00';
        }else if(sec<10){
            return `0${sec}`
        }else return sec
    }
}