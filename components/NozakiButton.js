const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <button 
            class='w3-button w3-ripple w3-${self.dataset.color || 'black'} ${self.dataset.class||''}'
            style='${self.dataset.style||''}'
        >
            <slot name='text'></slot>
        </button>
    `;
}

class NozakiButton extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }
}

customElements.define('nozaki-button', NozakiButton);

export {
    NozakiButton as default,
    NozakiButton
}