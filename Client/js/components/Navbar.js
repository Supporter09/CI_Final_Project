const $templateNavbar = document.createElement("template");
$templateNavbar.innerHTML = /*html */ `
  <link rel="stylesheet" href="./css/navbar.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <nav class="navbar navbar-expand-md fixed-top">
    <a class="navbar-brand" href="#!/">Netflix</i></a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#!/films" class="nav-link">Films</a>
        </li>
        <li class="nav-item">
          <a href="#!/ranking" class="nav-link">Ranking</a>
        </li>
        <li class="nav-item">
          <a id="news" href="#" class="nav-link">News</a>
        </li>
        <li class="nav-item">
          <a id="more" href="#" class="nav-link">More</a>
        </li>
        <button type="button" id="login-btn" class="btn btn-outline-light btn-sm" ><a href="#!/sign-in" style="text-decoration: none;">Login</a></button>
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
    this.$sign_in_btn = this.shadowRoot.getElementById("login-btn");

    this.$news = this.shadowRoot.getElementById("news");
    this.$more = this.shadowRoot.getElementById("more");
  }

  connectedCallback(){
    this.$news.onclick = () => {
      this.$news.style.opacity = "0";
      this.$news.style.cursor = "default";
      alert("Chức năng đang thử nghiệm😁");
    }

    this.$more.onclick = () => {
      this.$more.style.opacity = "0";
      this.$more.style.cursor = "default";
      alert("Chức năng đang thử nghiệm😁");
    }
  }

}

window.customElements.define("navbar-filter", NavbarOnTop);
