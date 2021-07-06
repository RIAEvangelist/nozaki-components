import nozakiGlobal from '../modules/NozakiGlobal.js';

const style=`<link rel="stylesheet" href="${nozakiGlobal.root}css/w3.css">`;

function getTemplate(self){
    return `
    ${style}
    <style>
        ${self.dataset.style}
    </style>
    <input class='w3-input ${self.dataset.class}' 
        type='text'
        placeholder='${self.dataset.placeholder}'
    />
`;
}

class NozakiInput extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }

    static get observedAttributes() {
        return [
            
        ];
    }

    async connectedCallback(){
        
        return this;
    }

    async disconnectedCallback(){

        return this;
    }

    async attributeChangedCallback(name, oldVal, newVal){

        return this;
    }

}

customElements.define('nozaki-input', NozakiInput);