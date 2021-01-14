import Navbar from "./Navbar.js"
import RecommendContainer from "./RecommendContainer.js"

const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <navbar-filter></navbar-filter>
    <div class="row">
        <div class="col-lg-10">
            <iframe src="https://drive.google.com/file/d/1E5scjDKa-ztPgfGT7sm7ZtwmIEf0AWRi/preview" width="100%" height="66%"></iframe>
        </div>
        <div class="col-lg-2">
            <div>
                <h3 style="color: rgb(255,255,255);">Recommend</h3>
            </div>
            <recommend-container></recommend-container>
        </div>
    </div>
    `;

export default class LiveFilm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('live-film', LiveFilm);