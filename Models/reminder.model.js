
export default class Reminder{

    
    constructor(title,description,duration,priority){
    this.title=title
    this.description=description
    this.duration=duration
    this.priority=priority

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