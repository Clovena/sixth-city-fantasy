class HeaderMini extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <li class="header-bar header-mini">
          <a href="../index.html" class="header-button" role="button">
            <img
              src="../assets/images/scdfl.svg"
              alt="Sixth City Dynasty Football League"
              id="league-logo" />
          </a>
        </li>
      </header>
    `;
  }
}

customElements.define('headermini-component', HeaderMini);
