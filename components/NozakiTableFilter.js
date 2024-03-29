import './NozakiInput.js';
import './NozakiTable.js';

const style=`<link rel="stylesheet" href="../css/w3.css">`;

function getTemplate(self){
    return `
        ${style}
        <div class='w3-container w3-padding ${self.dataset.class||''}'
            style='${self.dataset.style||''}'
        >
            <h2><slot name='title'>Filter Table</slot></h2>
            <p><slot name='subtitle'>Search for an entry in the input field.</p>

            <nozaki-input
                data-class='${self.dataset.inputclass||''}'
                data-style='${self.dataset.inputstyle||''} width:calc(100% - 16px);'
                data-placeholder='${self.dataset.inputplaceholder||''}'
            ></nozaki-input>

            <nozaki-table
                data-class='w3-padding ${self.dataset.tableclass||''}'
                data-style='${self.dataset.tablestyle||''}'
            >${self.querySelector('table').outerHTML||''}</nozakiTable>
        </div>

    `;
}

class NozakiTableFilter extends HTMLElement {
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

        const tr = this.shadowRoot.querySelector('nozaki-table')
            .shadowRoot.querySelectorAll('table tr');
        
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].querySelectorAll("td");
            for(let j=0; j<td.length; j++){
                if (td[j]) {
                    const txtValue = td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = '';
                    } else {
                        tr[i].style.display = 'none';
                    }
                }
            }
        }
    }
}

customElements.define('nozaki-table-filter', NozakiTableFilter);

export {
    NozakiTableFilter as default,
    NozakiTableFilter
}