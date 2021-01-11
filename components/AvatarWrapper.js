const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>

    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <user-avatar></user-avatar>
    <user-avatar></user-avatar>
`;

export default class AvatarWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('avatar-wrapper', AvatarWrapper);