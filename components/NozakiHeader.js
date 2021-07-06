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
        <header class='w3-container w3-${self.dataset.color||'gray'} w3-cell-row ${self.dataset.class}'
            style='padding:0; ${self.dataset.style||''}'
        >
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
}

customElements.define('nozaki-header', NozakiHeader);

export {
    NozakiHeader as default,
    NozakiHeader
}