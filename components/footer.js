class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        Copyright &copy; 2025 Zacalytics, LLC.<br />
        Some rights reserved.<br />
        Icons and custom fonts<br />by Google Fonts.
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
