import { getDataFromDocs, getDataFromFirebase } from "../utils.js";
import RatingComponent from "./ratingComponent.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
  <link rel="stylesheet" href="./css/ratingList.css"/>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <navbar-filter></navbar-filter>
  <div class="container" id="rating-film-list">
    <div class="row">
      <div class="col-sm-1 component">
        STT
      </div>
      <div class="col-sm-3">
      
      </div>
      <div class="col-sm-3">
        Name
      </div>
      <div class="col-sm-3">
        Director
      </div>
      <div class="col-sm-2">
        Like
      </div>
    </div>
  </div>
  <footer-div></footer-div>
    `;

export default class RatingList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$ratingFilmList = this.shadowRoot.getElementById("rating-film-list");
  }

  async connectedCallback() {
    let dataFilm = await getDataFromFirebase();
    dataFilm = getDataFromDocs(dataFilm);
    let check = 300;
    for (let i = 0; i < 10; i++) {
      let ratingFilmTmp = dataFilm[0];
      let minRating = 0;
      for (let film of dataFilm) {
        if (film.rating < check && film.rating > minRating) {
          minRating = film.rating;
          ratingFilmTmp = film;
        }
      }
      check = minRating;
      console.log(check);
      let $ratingFilm = new RatingComponent(JSON.stringify(ratingFilmTmp), i + 1);
      this.$ratingFilmList.appendChild($ratingFilm);
    }
  }
}

window.customElements.define("rating-list-page", RatingList);
