const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>
        .column1{
            margin-left: 10px;
        }
        .avatar {
            height: 300px;
            width: 300px;
        }
        .avatar-container {
            display: flex;
            justify-content: center;
        }

        .input-avatar-container{
            display: flex;
            justify-content: center;
            margin-top: 5px;
        }
    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="avatar-container shadow-none p-3 bg-light rounded">
        <img id="avatar" src="https://www.w3schools.com/howto/img_avatar.png" class="avatar">
    </div>
    <div class="input-avatar-container">
        <input type="file" id="input-avatar">
    </div>
`;

export default class UserAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('user-avatar', UserAvatar);