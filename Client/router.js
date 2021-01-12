import SignUp from "./js/components/SignUp.js";
import SignIn from "./js/components/LoginForm.js";
import FilmComponent from "./js/components/Films.js";
var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/", function () {
    // show home page here
    document.getElementById("app").innerHTML =
      "<container-box></container-box>";
  })
  .resolve();

router
  .on("/sign-up", function () {
    // document.getElementById('app').innerHTML ="";
    document.getElementById("app").innerHTML = "<sign-up></sign-up>";
    console.log("ban dang o chuc nang dang ki");
  })
  .resolve();

router
  .on("/sign-in", function () {
    document.getElementById("app").innerHTML = "<login-form></login-form>";
    console.log("ban dang o chuc nang dang nhap");
  })
  .resolve();

router.on("/films", function () {
  document.getElementById("app").innerHTML =
    "<films-component></films-component>";
});

window.router = router;
