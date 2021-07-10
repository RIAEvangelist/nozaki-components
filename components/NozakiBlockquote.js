const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        
        <blockquote 
            class="w3-panel w3-leftbar 
                w3-${self.dataset.color||'light-gray'} 
                ${self.dataset.class||''}"
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
}

customElements.define('nozaki-blockquote', NozakiBlockquote);

export {
    NozakiBlockquote as default,
    NozakiBlockquote
}