class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <p>Jieren0721, Copyright &copy 2020 | Powered by <a href="https://pages.github.com/">Github Pages.</a></p>
		<p>Site was built using HTML5, CSS, Javascript and Atom.</p>
    <a href='bit.ly/3FUjQrL'><img id='donate' src='https://raw.githubusercontent.com/bnkcollections/bnkcollections.github.io/master/img/donate.jpg' type='button'/></a>
    <p class="conUs" onclick="navClick('contact')">Contact Us</p>
    `;
  }
}

  customElements.define('footer-donate', Footer);
