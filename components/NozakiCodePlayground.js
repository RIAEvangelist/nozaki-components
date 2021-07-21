const style=`
    <link rel="stylesheet" href="../css/w3.css">
    <style>
        textarea[codeinput]{
            width:calc(100% - 48px);
            height:400px;
        }
    </style>
    
`;

const defaults={
    main:'gray',
    secondary:'light-gray',
    button:'blue-gray',
    headertext:'Code Playground'
}

function getTemplate(self){
    return `
        ${style}
        <main class=" ${self.dataset.class||''}"
            style="${self.dataset.style||''}"
        >
            <iframe 
                
                src="https://codesandbox.io/embed/new"    
            ></iframe>
        </main>
    `;
}

class NozakiCodePlayground extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);
        
        return this;
    }

    injectCode(code){
        this.shadowRoot.querySelector('iframe')
            .contentWindow.document
            .querySelector('body')
            .innerHTML=code;
    }

    // learn more about webcomponent lifecycle on MDN
    // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks

    static get observedAttributes() {
        return [
            
        ];
    }

    async connectedCallback(){
        
        return this;
    }

    async disconnectedCallback(){

        return this;
    }

    static get observedAttributes() { 
        return []; 
    }

    async attributeChangedCallback(name, oldVal, newVal){

        return this;
    }

}

customElements.define('nozaki-code-playground', NozakiCodePlayground);

export {
    NozakiCodePlayground as default,
    NozakiCodePlayground
}