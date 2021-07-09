const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        
        <article class="w3-card w3-padding w3-cell ${self.dataset.class||''}"
            style="${self.dataset.style||''}"
        >${self.innerHTML}</article>
        
    `;
}

class NozakiCard extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }
}

customElements.define('nozaki-card', NozakiCard);

export {
    NozakiCard as default,
    NozakiCard
}