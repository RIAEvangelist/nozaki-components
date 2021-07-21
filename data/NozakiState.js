import Events from '/libs/event-pubsub/index.js';

const data={}
const observableData=new Proxy(
    data,
    {
        set(target, key, value, reciever){
            Reflect.set(target, key, value, reciever)
            console.log(key,value);
            return target;
        }
    }
)

class NozakiState extends Events{
    constructor() {
        super();

        return this;
    }

    data=observableData;
}

export {
    NozakiState as default,
    NozakiState
}