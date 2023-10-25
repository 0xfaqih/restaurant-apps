class FooterApp extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
     <style>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    
    body,
    html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
    
    body {
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      color: #1f1f29;
    }

    footer {
      background-color: #e6e6eb;
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 60px;
      overflow: hidden;
    }
    
    footer p {
      color: black;
      font-weight: 400;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    </style>
      <footer>
      <p>Copyright &copy; 2023 - Kenyangin</p>
      </footer>
      `;
  }
}

customElements.define('footer-app', FooterApp);
