import events from './NozakiEvents.js'

class NozakiTimeTravel extends Array{
    constructor(){
        super();

        events.on(
            '*',
            this.push
        );

        return this;
    }

    start=Date.now()

    stop=()=>{
        events.off(
            '*',
            this.add
        );
    }
}

const timeTravel=new NozakiTimeTravel;

export {
    timeTravel as default,
    timeTravel
}