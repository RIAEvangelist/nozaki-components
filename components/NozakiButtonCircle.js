import NozakiButton from './NozakiButton.js'

const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <button 
            class="w3-button w3-ripple w3-${self.dataset.color || 'black'} ${self.dataset.class||''}"
            style="${self.dataset.style}"
        >
            <slot name='text'></slot>
        </button>
    `;
}

class NozakiButtonCircle extends NozakiButton {
    constructor() {
        super();
        
        this.shadowRoot.querySelector('button').classList.add('w3-circle','w3-xlarge');

        return this;
    }
}

customElements.define('nozaki-button-circle', NozakiButtonCircle);

export {
    NozakiButtonCircle as default,
    NozakiButtonCircle
}