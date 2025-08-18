class Template extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <html></html>
    `;
  }
}

customElements.define('template-component', Template);
