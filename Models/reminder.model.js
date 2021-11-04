import priorityEnum from "../Enums/priority.enum"
import { v4 as uuidGen } from "uuid"
export default class Reminder{

    
    constructor(title,description,duration,priority=priorityEnum.p3){
    this.uuid=uuidGen()
    this.title=title
    this.description=description
    this.duration=duration
    this.priority=priority

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
    //Return durationHour ;purpose
    getDurationHour(){
        return this.durationHour
    }
    //None=>Natural ;stub
    // return durationMin ;purpose
    getDurationMin(){
        return this.durationMin
    }
    //None=>Natural ;stub
    // 'return durationSec' ;purpose
    getDurationSec(){
        return this.durationSec
    }

    //Natural=>None ;stub
    //"Set durationHour" ;purpose
    setDurationHour(newDuration){
        this.durationHour=newDuration
    }
    //Natural=>None ;stub
    //"Set durationMin" ;purpose
    setDurationMin(newDuration){
        this.durationMin=newDuration
    }
    //Natural=>None ;stub
    //"Set durationSec" ;purpose
    setDurationSec(newDuration){
        this.durationSec=newDuration
    }

    getFormattedTime(){
        return this.duration%60
    }
}