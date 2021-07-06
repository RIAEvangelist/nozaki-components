const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <table class='w3-table-all w3-hoverable w3-card w3-margin-top ${self.dataset.class}'
            style='${self.dataset.style||''}'
        >
            ${self.shadowRoot.host.querySelector('table').innerHTML}        
        </table>
    `;
}

class NozakiTable extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }
}

customElements.define('nozaki-table', NozakiTable);

export {
    NozakiTable as default,
    NozakiTable
}