class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <li class="header-bar">
          <a
            href="https://sleeper.com/leagues/1185347458376470528"
            class="header-button"
            target="_blank"
            role="button">
            <img
              class="external-link"
              src="./assets/images/sleeper.png"
              alt="Sleeper"
              id="sleeper-logo" />
          </a>
          <a href="index.html" class="header-button" role="button">
            <img
              src="./assets/images/scdfl.svg"
              alt="Sixth City Dynasty Football League"
              id="league-logo" />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1WOW_jRQHGMXSN1Z-5iLTald3UL9Byi_e?usp=sharing"
            class="header-button"
            target="_blank"
            role="button">
            <img
              class="external-link"
              src="./assets/images/drive.png"
              alt="Google Drive"
              id="drive-logo" />
          </a>
        </li>
        <h1 class="header-text title">Sixth City Dynasty</h1>
        <h3 class="header-text slogan">
          Rugged Cleveland football<br />in the Great White North.
        </h3>
      </header>
    `;
  }
}

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

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <footer>
        Copyright &copy; 2025<br />
        Zacalytics, LLC.<br />
        Some rights reserved.<br />
        Icons and custom fonts<br />
        by Google Fonts.
      </footer>
    `;
  }
}

customElements.define('header-component', Header);
customElements.define('headermini-component', HeaderMini);
customElements.define('footer-component', Footer);
