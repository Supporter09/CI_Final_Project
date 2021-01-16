import { getDataFromDocs, getDataFromFirebase } from "../utils.js";
import RatingComponent from "./ratingComponent.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
  <link ref="stylesheet" href="./css/ratingComponent.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <div class="container">
    <thead>
      <tr>
        <th scope="col">Ranking</th>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Director</th>
        <th scope="col">Rating</th>
      </tr>
    </thead>
    <tbody id="rating-film-list">
    </tbody>
  </div>
    `;

export default class RatingList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$ratingFilmList = this.shadowRoot.getElementById("rating-film-list");
  }

  async connectedCallback() {
    console.log("hungs");
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
      let ratingFilm = new RatingComponent(JSON.stringify(ratingFilmTmp));
      this.$ratingFilmList.appendChild(ratingFilm);
    }
  }
}

window.customElements.define("rating-list-page", RatingList);
