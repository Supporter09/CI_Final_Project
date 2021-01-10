const $templateNavbar = document.createElement("template");
$templateNavbar.innerHTML = /*html */ `
  <link rel="stylesheet" href="./css/navbar.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <nav class="navbar navbar-expand-md fixed-top">
    <a class="navbar-brand" href="#">Netflix</i></a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Films</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Ranking</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">News</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">More</a>
        </li>
        <button type="button" id="login-btn" class="btn btn-outline-light btn-sm">Login</button>
      </ul>
    </div>
  </nav>
`;

//* shadowDOM
export default class NavbarOnTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($templateNavbar.content.cloneNode(true));
  }
}

window.customElements.define("navbar-filter", NavbarOnTop);
