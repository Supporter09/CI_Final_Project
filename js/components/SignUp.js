import validateEmail from '../utils.js'
import InputWrapper from "./InputWrapper.js";

const $template = document.createElement('template');
// <-- Khi submit thi chuyen den duong dan trong attr action cua form -->
$template.innerHTML = /*html*/ `
<script defer src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
    <link rel="stylesheet" href="./css/register-form.css">
    <div class="signup-form">
        <form action="" id="register-form">
            <h2>Sign Up</h2>
            <hr>
            <div class="form-group">
                <input-wrapper id="nickname" label="Nickname" type="text" error="" value ="" class="form-control" name="nickname" ></input-wrapper>
            </div>
            <div class="form-group">
                <input-wrapper id="name" label="Username" type="text" error="" value ="" class="form-control" name="username" ></input-wrapper>
            </div>
            <div class="form-group">
                <input-wrapper id="email" label="Email" type="email"  error="" value ="" class="form-control" name="email"></input-wrapper>
            </div>
            <div class="form-group">
                <input-wrapper id="password" label="Password" type="password" error="" value ="" class="form-control" name="password" ></input-wrapper>
            </div>
            <div class="form-group">
                <input-wrapper id="password-confirmation" label="Confirm your password" type="password" error="" value ="" class="form-control" name="confirm_password"></input-wrapper>
            </div>
            <div class="form-group">
                <button type="submit" id='register-btn'  class="btn btn-primary btn-block btn-lg">Sign Up</button>
            </div>
            <p class="small text-center">By clicking the Sign Up button, you agree to our <br><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a></p>
        </form>
        <div class="text-center">Already have an account? <a href="#">Login here</a></div>
    </div>
    
    
`

// Shadow DOM
export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$form = this.shadowRoot.getElementById('register-form');
        this.$email = this.shadowRoot.getElementById('email');
        this.$nickname = this.shadowRoot.getElementById('nickname');
        this.$name = this.shadowRoot.getElementById('name');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');
    }

    connectedCallback() {
        this.$form.onsubmit = async (event) => {
            event.preventDefault();
            // console.log(this.$email.value());
            let email = this.$email.value();
            let nickname = this.$nickname.value();
            let name = this.$password.value();
            let password = this.$password.value();
            let passwordConfirmation = this.$passwordConfirmation.value();
            // if (email == '') {
            //     this.$email.alertError('Nhập email của bạn')
            // }else{
            //     this.$email.alertError('');
            // }
            let isPassed =
                (InputWrapper.checkForm(this.$email, (value) => value != '', "Nhap vao email") &&
                    InputWrapper.checkForm(this.$email, (value) => validateEmail(value), "Email khong hop le")) &

                InputWrapper.checkForm(this.$name, (value) => value != '', 'Nhap vao ten dang ki') &

                InputWrapper.checkForm(this.$password, (value) => value != '', 'Nhap vao mat khau') &

                (InputWrapper.checkForm(this.$passwordConfirmation, (value) => value != '', 'Nhap lai xac nhan mat khau') &&
                    InputWrapper.checkForm(this.$passwordConfirmation, (value) => value == password, 'Mat khau xac nhan khong chinh xac'))

            console.log(isPassed)
            if (isPassed) {
                console.log(email)
                console.log(password)
                firebase.auth().createUserWithEmailAndPassword(email, password).then().catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    alert(errorMessage)
                    // ...
                });

                let result = await firebase
                    .firestore()
                    .collection('users')
                    .where('email', '==', email)
                    .get();
                if (result.empty) {
                    firebase.firestore().collection('users').add({
                        id:CryptoJS.MD5(password).toString(),
                        nickname: nickname,
                        name: name,
                        email: email,
                        password: CryptoJS.MD5(password).toString()
                    });
                    window.location.href ='./'
                } else {
                    alert('Email nay do co nguoi su dung')
                }
            }
        }
    }
}

window.customElements.define('sign-up', RegisterForm);