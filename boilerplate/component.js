import nozakiGlobal from '../modules/NozakiGlobal.js';

const style=`<link rel="stylesheet" href="${nozakiGlobal.root}css/w3.css">
    <style>
        
    </style>
`;

function getTemplate(self){
    return `
    ${style}
    ${self.dataset.someDataAttr}
`;
}

class NozakiX extends HTMLElement {
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

customElements.define('nozaki-yyy', NozakiX);