import RecommendItem from "./RecommendItem.js";
import { getDataFromDocs, getDataFromFirebase } from "../utils.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div id="recommended-films">
    </div>
`;

export default class RecommendContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$recommendedFilm = this.shadowRoot.getElementById("recommended-films");
  }

  async connectedCallback() {
    let dataFilm = await getDataFromFirebase();
    dataFilm = getDataFromDocs(dataFilm);
    console.log(dataFilm);
    let check = 150;
    for (let i = 0; i < 3; i++) {
      let recommendedFilmTmp = dataFilm[0];
      let minRating = 0;
      for (let film of dataFilm) {
        if (film.rating < check && film.rating > minRating) {
          minRating = film.rating;
          recommendedFilmTmp = film;
        }
      }
      check = minRating;
      console.log(check);
      let filmUploadToRecommend = new RecommendItem(
        JSON.stringify(recommendedFilmTmp)
      );
      console.log(filmUploadToRecommend);
      this.$recommendedFilm.appendChild(filmUploadToRecommend);
    }
  }
}

window.customElements.define("recommend-container", RecommendContainer);
