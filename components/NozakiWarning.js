import NozakiAlert from './NozakiAlert.js'

class NozakiWarning extends NozakiAlert {
    constructor() {
        super();
        
        let update=0;

        if(!this.dataset.color){
            this.dataset.color='pale-red';
            update++;
        }
        if(!this.dataset.title){
            this.dataset.title='Warning!';
            update++;
        }

        if(update){
            this.shadowRoot.innerHTML= this.getTemplate(this);
            this.bindEvents();
        }
        
        return this;
    }
}

customElements.define('nozaki-warning', NozakiWarning);

export {
    NozakiWarning as default,
    NozakiWarning
}