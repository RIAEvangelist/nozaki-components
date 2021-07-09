const style=`
    <link rel="stylesheet" href="../css/w3.css">
    <style>
        img{
            height:5em;
        }
    </style>
`;

function getTemplate(self){
    return `
        ${style}
        <header class='w3-container w3-margin-bottom w3-${self.dataset.color||'gray'} w3-cell-row ${self.dataset.class||''}'
            style='padding:0; ${self.dataset.style||''}'
        >
            <div data-image-parent class='w3-container w3-cell ${self.dataset.imgclass||''}' style='${self.dataset.imgstyle||''}'>
                <img class='w3-round' src='${self.dataset.img||''}' />
            </div>
            <div class='w3-container w3-cell'>
                <h1>
                    ${self.dataset.text||''}
                </h1>
            </div>
            ${self.innerHTML}
        </header>
    `;
}

class NozakiHeader extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML=getTemplate(this);
        
        if(!this.dataset.img){
            this.shadowRoot.querySelector('div[data-image-parent]').display='none';
        }

        return this;
    }
}

customElements.define('nozaki-header', NozakiHeader);

export {
    NozakiHeader as default,
    NozakiHeader
}