import RecommendItem from "./RecommendItem.js";
import {getDataFromDocs, getDataFromFirebase} from "../utils.js"

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <recommend-item id="recommended-films" image="https://ss-images.catscdn.vn/2019/08/21/5887028/spider-man-far-from-home-3.jpg" name="Spiderman" date="20 Dec 1969"></recommend-item>
`;

export default class RecommendContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$img = this.shadowRoot.getElementById("recommended-films");
  }

  async connectedCallback() {
    let dataFilm = await getDataFromFirebase();
    dataFilm = getDataFromDocs(dataFilm);
    console.log(dataFilm);
  }
}

window.customElements.define("recommend-container", RecommendContainer);
