const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <link ref="stylesheet" href="./css/ratingComponent.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td>
        <img class="card-img-top" src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="Film Image">
      </td>
      <td><h3>Mlem Mlem</h3></td>
      <td><h3>Tran Hung</h3></td>
      <td>100</td>
    </tr>
    `;

export default class RatingComponent extends HTMLElement {
  constructor(film) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.setAttribute("film", film);
  }

  static get observedAttributes() {
    return ["film"];
  }

  attributeChangedCallback(attrName, oldValue, newValue){
      if(attrName == "film"){
        //
      }
  }
}

let a = window.customElements.get('my-tag');
console.log('rating');
window.customElements.define("aaa-bbdd", RatingComponent);
