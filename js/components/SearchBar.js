import FilmList from "./FilmList.js";
const $template = document.createElement("template");

export let keyword;

$template.innerHTML = /*html*/ `
  <link rel="stylesheet" href="./CSS/searchBar.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <form id="search-bar">
    <div class="form-group">
      <label id="label-search" for="">Search:</label>
      <input label="Search" id="search-input" type="search" class="form-control" placeholder="Avenger" aria-label="Search" value="">
    </div>
  </form>
`;

export default class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$form = this.shadowRoot.getElementById("search-bar");
    this.$searchInput = this.shadowRoot.getElementById("search-input");
  }

  connectedCallback() {
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "value") {
      // console.log(newValue);
    }
  }

  set onSearchFilm(callback){
    this.$form.onsubmit = (event) => {
      event.preventDefault();
      callback(this.$searchInput.value);
    }
  }
}

window.customElements.define("search-bar", SearchBar);
