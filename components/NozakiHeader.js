import nozakiGlobal from '../modules/NozakiGlobal.js';

const style=`
    <link rel="stylesheet" href="${nozakiGlobal.root}css/w3.css">
    <style>
        img{
            height:5em;
        }
    </style>
`;

function getTemplate(self){
    return `
        ${style}
        <header class='w3-container w3-${self.dataset.color} w3-cell-row'>
            <div class='w3-container w3-cell'>
                <img class='w3-round' src='${self.dataset.img}' />
            </div>
            <div class='w3-container w3-cell'>
                <h1>
                    ${self.dataset.text}
                </h1>
            </div>
        </header>
    `;
}

class NozakiHeader extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
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

customElements.define('nozaki-header', NozakiHeader);