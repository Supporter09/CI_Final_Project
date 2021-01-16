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
    </div>
`;

export default class RecommendItem extends HTMLElement {
    constructor(recommendedFilmData) {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$filmImage = this.shadowRoot.getElementById('film-image');
        this.$filmName = this.shadowRoot.getElementById('film-name');

        this.setAttribute('recommendedFilm', recommendedFilmData);
    }

    static get observedAttributes () {
        return ['recommendedFilm'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == "recommendedFilm"){
            let filmData = JSON.parse(newValue);
            console.log(filmData);
            this.$filmImage.src = filmData.img;
            this.$filmName.innerHTML = filmData.name;
        }
    }
}

window.customElements.define('recommend-item', RecommendItem);