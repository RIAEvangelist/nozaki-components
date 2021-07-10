import NozakiButton from './NozakiButton.js'
const style=`<link rel="stylesheet" href="../css/w3.css">`;

const defaults={
    color:'pale-yellow'
}

function getTemplate(self){
    return `
        ${style}
        
        <div class='w3-panel w3-${self.dataset.color||defaults.color} 
                w3-display-container w3-border
                ${self.dataset.class||''}'
            style='${self.dataset.style||''}'
        >
            <nozaki-button 
                data-close
                data-class='w3-display-topright ${self.dataset.buttonclass||''}'
                data-style='${self.dataset.buttonstyle||''}'
                data-color='${self.dataset.color||defaults.color}'
            ><span slot='text'>&times;</span></nozaki-button>
            
            <h3>${self.dataset.title||'ALERT!'}</h3>
            ${self.innerHTML}
        </div>   
    `;
}

class NozakiAlert extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=this.getTemplate(this);
        this.bindEvents();
        

        return this;
    }

    getTemplate=getTemplate;

    bindEvents=()=>{
        this.shadowRoot.querySelector('nozaki-button[data-close]').onclick=this.close;
    }

    close=(e)=>{
        this.style.display='none';
    }
}

customElements.define('nozaki-alert', NozakiAlert);

export {
    NozakiAlert as default,
    NozakiAlert
}