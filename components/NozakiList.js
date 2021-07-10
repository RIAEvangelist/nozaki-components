const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <ul class='w3-ul w3-hoverable ${self.dataset.class||''}'
            style='${self.dataset.style||''}'
        >
            ${self.innerHTML}
        </ul>
    `;
}

class NozakiList extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }
}

customElements.define('nozaki-list', NozakiList);

export {
    NozakiList as default,
    NozakiList
}