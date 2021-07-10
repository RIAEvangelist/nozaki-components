const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        
        <aside class="w3-panel 
            w3-${self.dataset.color||'light-gray'} 
            w3-leftbar  
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
}

customElements.define('nozaki-note', NozakiNote);

export {
    NozakiNote as default,
    NozakiNote
}