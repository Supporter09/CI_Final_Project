import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import RecommendContainer from "./RecommendContainer.js";
import { getDataFromDoc, getDataFromDocs } from "../../js/utils.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="./css/liveFilm.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <navbar-filter></navbar-filter>
    <div class="container">
        <div class="row">
            <div class="col-lg-9" style="height: 80vh;">
                <iframe id="film" src="" width="100%" height="100%"></iframe>
            </div>
            <div class="col-lg-3">
                <div>
                    <h3 style="color: rgb(255,255,255);">Recommend</h3>
                </div>
                <recommend-container></recommend-container>
            </div>
        </div>
    </div>
    `;

export default class LiveFilm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
  }

  async connectedCallback() {
    let name = localStorage.getItem("name");
    console.log(name);
    let result = await firebase
      .firestore()
      .collection("FilmData")
      .where("name", "==", name)
      .get();
    let realdata = getDataFromDocs(result.docs);
    this.$film = this.shadowRoot.getElementById("film");
    this.$film.src = realdata[0].film_url;
    console.log(realdata[0].film_url);
    console.log(this.$film.src);
    window.scroll(0, 0);
  }
}

window.customElements.define("live-film", LiveFilm);
