class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <a href='bit.ly/3FUjQrL'><img id='donate' src='https://raw.githubusercontent.com/bnkcollections/bnkcollections.github.io/master/img/donate.jpg' type='button'/></a>
    `;
  }
}

customElements.define('footer-component', Footer);
