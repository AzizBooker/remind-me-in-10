import priorityEnum from "../Enums/priority.enum"

export default class Reminder{

    
    constructor(uuid,title,description,duration,priority=priorityEnum.p3){
    this.uuid=uuid
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
}