const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        
        <aside class="w3-panel 
            w3-pale-${self.dataset.color} 
            w3-leftbar 
            w3-border-${self.dataset.color} 
            ${self.dataset.class||''}"

            style="${self.dataset.style||''}"
        >${self.innerHTML}</aside>
    `;
}

class NozakiNote extends HTMLElement {
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

customElements.define('nozaki-note', NozakiNote);

export {
    NozakiNote as default,
    NozakiNote
}