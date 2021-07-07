import './NozakiInput.js';
import './NozakiList.js';

const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <div class='w3-container w3-padding ${self.dataset.class||''}'
            style='${self.dataset.style||''}'
        >
            <h2><slot name='title'>Filter List</slot></h2>
            <p><slot name='subtitle'>Search for an entry in the input field.</p>

            <nozaki-input
                data-class='${self.dataset.inputclass||''}'
                data-style='${self.dataset.inputstyle||''} width:calc(100% - 16px);'
                data-placeholder='${self.dataset.inputplaceholder||''}'
            ></nozaki-input>

            <nozaki-list
                data-class='w3-padding ${self.dataset.listclass||''}'
                data-style='${self.dataset.liststyle||''}'
            >${self.innerHTML}</nozakiTable>
        </div>

    `;
}

class NozakiListFilter extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        this.onkeyup=this.filter;

        return this;
    }

    filter() {
        const filter = this.shadowRoot.querySelector('nozaki-input')
            .shadowRoot.querySelector('input')
            .value
            .toUpperCase();

        const li = this.shadowRoot.querySelector('nozaki-list')
            .shadowRoot.querySelectorAll('ul>li');
        
        for (let i = 0; i < li.length; i++) {
            const txtValue = li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }
}

customElements.define('nozaki-list-filter', NozakiListFilter);

export {
    NozakiListFilter as default,
    NozakiListFilter
}