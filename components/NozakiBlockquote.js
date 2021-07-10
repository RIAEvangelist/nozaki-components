const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        
        <blockquote 
            class="w3-panel w3-leftbar w3-light-${self.dataset.color||'gray'} ${self.dataset.class||''}"
            style="${self.dataset.style||''}"    
        >
            <p class="w3-large">
                <em>"${self.dataset.quote||''}"</em>
            </p>
            <p>${self.dataset.author||'Anonymous'}</p>
        </blockquote>
        
    `;
}

class NozakiBlockquote extends HTMLElement {
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

customElements.define('nozaki-blockquote', NozakiBlockquote);

export {
    NozakiBlockquote as default,
    NozakiBlockquote
}