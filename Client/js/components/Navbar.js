const $templateNavbar = document.createElement("template");
$templateNavbar.innerHTML = /*html */ `
  
  <link rel="stylesheet" href="./css/navbar.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  
  <nav class="navbar navbar-expand-md fixed-top" >
    <a class="navbar-brand" href="#!/">Netflix</i></a>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#!/films" class="nav-link">Films</a>
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
        <button type="button" id="login-btn" class="btn btn-outline-light btn-sm" ><a href="#!/sign-in" style="text-decoration: none;">Login</a></button>
        
      </ul>
      <a href="#!/profile"><img src="" alt="" id="user-avatar" class=""></a>
      <p id="greeting"></p>
    </div>
  </nav>
 
`;

//* shadowDOM
export default class NavbarOnTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild($templateNavbar.content.cloneNode(true));
    this.$sign_in_btn = this.shadowRoot.getElementById("login-btn");
    this.$navbar = this.shadowRoot.getElementById("navbar");
    this.$user_avatar = this.shadowRoot.getElementById("user-avatar");
    this.$greeting = this.shadowRoot.getElementById("greeting");
  }
  async connectedCallback() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('user sign in')
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        var image = document.createElement('img')
        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          console.log(name,"  ",email,"  ",uid,"  ",photoUrl )
          // image.setAttribute('src',photoUrl);
          // this.$navbar.appendChild(image);
          this.$user_avatar.style.display = "block";
          this.$sign_in_btn.style.display ="none";
          this.$user_avatar.setAttribute('src',photoUrl)
          this.$greeting.innerHTML  = "Hello, " + name + " !"
        }
        // user.updateProfile({
        //   displayName: "Jane Q. User",
        //   photoURL: "https://lh3.googleusercontent.com/pw/ACtC-3c62Ub_pEImDAGnAMUTc0V1UBj3Zwoyahb57mNbkR05x4aYOob-h-dOQYdnb2mcYe8XCO1C43JpeFKzKjykj_WS8z_4AUvYkactJmq_rsZq4O6SxvO-VQH48o39GgCDtHzks-cwE84_6IDqCk0BqdfA=s903-no?authuser=0"
        // }).then(function() {
          
        // }).catch(function(error) {
          
        // });
        
        

      } else {
        // No user is signed in.
        console.log('not sign in')
        this.$sign_in_btn.style.display ="block";
        this.$user_avatar.style.display = "none";
      }
    });
  }

}

window.customElements.define("navbar-filter", NavbarOnTop);