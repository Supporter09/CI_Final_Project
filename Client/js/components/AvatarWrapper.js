import {getDataFromDoc, getDataFromDocs} from "../utils.js";
import UserAvatar from "./UserAvatar.js";

const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div id="avatars">
    </div>
`;

export default class AvatarWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$avatars = this.shadowRoot.getElementById('avatars');
    }

    async connectedCallback() {
        let email = localStorage.getItem('email');
        let result = await firebase.firestore().collection('users').where('email', '==', email).get();
        let realdata = getDataFromDocs(result.docs);
        let avatar = realdata[0].avatar;

        this.$currentAvatar = new UserAvatar('Current Avatar', avatar);
        this.$recentAvatar = new UserAvatar('Recent Avatar', avatar);

        this.$avatars.appendChild(this.$currentAvatar);  
        this.$avatars.appendChild(this.$recentAvatar);    
    }
}

window.customElements.define('avatar-wrapper', AvatarWrapper);