import NozakiAlert from './NozakiAlert.js'

class NozakiWarning extends NozakiAlert {
    constructor() {
        super();
        
        if(!this.dataset.title){
            this.shadowRoot.querySelector('h3').innerHTML='Warning!';
        }

        if(!this.dataset.color){ 
            this.shadowRoot.querySelector('div').classList.add('w3-pale-red');
            this.shadowRoot.querySelector('div').classList.remove('w3-pale-yellow');

            this.shadowRoot.querySelector('nozaki-button').shadowRoot
                .querySelector('button').classList.add('w3-pale-red');
            
            this.shadowRoot.querySelector('nozaki-button').shadowRoot
                .querySelector('button').classList.remove('w3-pale-yellow');
        }
        
        return this;
    }
}

customElements.define('nozaki-warning', NozakiWarning);

export {
    NozakiWarning as default,
    NozakiWarning
}