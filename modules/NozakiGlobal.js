//this module is a singleton

class NozakiGlobal{
    constructor() {
        
        return this;
    }

    //this should be set to the
    //root dir for nozaki-components
    root='/'

    //this is where you can store your data safely
    //without risk of clobbering any component data
    data={}

}

const singleton=new NozakiGlobal;

export {
    singleton as default,
    singleton as nozakiGlobal
}