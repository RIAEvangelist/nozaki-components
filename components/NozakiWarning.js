import NozakiAlert from './NozakiAlert.js'

class NozakiWarning extends NozakiAlert {
    constructor() {
        super();
        
        if(!this.dataset.title){
            this.shadowRoot.querySelector('h3').innerHTML='Warning!';
        }

        if(!this.dataset.color){ 
            const root=this.shadowRoot.querySelector('div')
            const button=this.shadowRoot.querySelector('nozaki-button')
                .shadowRoot.querySelector('button')

            root.classList.add('w3-pale-red');
            root.classList.remove('w3-pale-yellow');

            button.classList.add('w3-pale-red');
            button.classList.remove('w3-pale-yellow');
        }
        
        return this;
    }
}

customElements.define('nozaki-warning', NozakiWarning);

export {
    NozakiWarning as default,
    NozakiWarning
}