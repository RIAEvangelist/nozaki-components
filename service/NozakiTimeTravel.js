import events from './NozakiEvents.js'

class NozakiTimeTravel{
    constructor(){
        events.on(
            '*',
            this.add
        );

        return this;
    }

    start=Date.now()
    eventLog=[]

    add=(type,data)=>{
        //log by offset
        this.eventLog.push(
            {
                offset:(
                    Date.now()-this.start
                ),
                event:{
                    type,
                    data
                }
            }
        );

        return this;
    }

}

const timeTravel=new NozakiTimeTravel;

export {
    timeTravel as default,
    timeTravel
}