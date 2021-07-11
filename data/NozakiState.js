import Is from 'strong-type';
import Events from 'event-pubsub';

const data={}


class NozakiState extends Events{
    constructor() {
        super();

        return this;
    }

    data=data;
}

export {
    NozakiState as default,
    NozakiState
}