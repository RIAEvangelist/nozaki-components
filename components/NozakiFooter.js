const style=`<link rel="stylesheet" href="../css/w3.css">
    <style>
        footer{
            text-align:center;
        }

        footer li{
            list-style:none;
        }
    </style>
`;

function getTemplate(self){
    return `
        ${style}
        
        <footer 
            class="w3-container w3-cell-row w3-${self.dataset.color||'gray'} ${self.dataset.class||''}"
            style='padding:1em 0; ${self.dataset.style||''}'    
        >${self.innerHTML}</footer>
    `;
}

class NozakiFooter extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }
}

customElements.define('nozaki-footer', NozakiFooter);