const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <div class="shadow-none p-4 mb-2 bg-light rounded">
        <div>
            <img id="film-image" src="" alt="" width="200" height="150">
        </div>
        <div>
            <h3 id="film-name">Frozen</h3>
        </div>
        <div>
            <h5 id="film-date" >Dec 20, 2020</h5>
        </div>
    </div>
`;

export default class RecommendItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$filmImage = this.shadowRoot.getElementById('film-image');
        this.$filmName = this.shadowRoot.getElementById('film-name');
        this.$filmDate = this.shadowRoot.getElementById('film-date');
    }

    static get observedAttributes () {
        return ['image', 'name', 'date'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$filmImage.src = newValue;
            break;
            case 'name':
                this.$filmName.innerHTML = newValue;
            break;
            case 'date':
                this.$filmDate.innerHTML = newValue;
            break;
        }
    }
}

window.customElements.define('recommend-item', RecommendItem);