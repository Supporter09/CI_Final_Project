import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import RecommendContainer from "./RecommendContainer.js"
import {getDataFromDoc, getDataFromDocs} from "../../js/utils.js";

const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>

    </style>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <navbar-filter></navbar-filter>
    <br></br>
    <br></br>
    <div class="row">
        <div class="col-lg-10">
            <iframe id="film" src="" width="100%" height="66%"></iframe>
        </div>
        <div class="col-lg-2">
            <div>
                <h3 style="color: rgb(255,255,255);">Recommend</h3>
            </div>
            <recommend-container></recommend-container>
        </div>
    </div>
    <footer-div></footer-div>
    `;

export default class LiveFilm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
async connectedCallback() {
    let name = localStorage.getItem('name');
    console.log(name);
    let result =  await firebase.firestore().collection('FilmData').where('name', '==', name).get();
    let realdata = getDataFromDocs(result.docs);
    this.$film = this.shadowRoot.getElementById('film');
    this.$film.src = realdata[0].film_url;
    console.log(realdata[0].film_url);
    console.log(this.$film.src);
}
}

window.customElements.define('live-film', LiveFilm);