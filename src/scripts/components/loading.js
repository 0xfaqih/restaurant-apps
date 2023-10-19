class LoadingApp extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      #loading-container {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 10vh;
         width: 100%;
         position: fixed;
         background: rgba(255, 255, 255, 0.8);
         z-index: 1000;
       }
       
       .loader {
         border: 8px solid #f3f3f3;
         border-top: 8px solid #3498db;
         border-radius: 50%;
         width: 50px;
         height: 50px;
         animation: spin 2s linear infinite;
       }
       
       @keyframes spin {
         0% { transform: rotate(0deg); }
         100% { transform: rotate(360deg); }
       }
       
      </style>
 
      <div id="loading-container">
         <div class="loader"></div>
      </div>

      `;
  }
}

customElements.define('loading-app', LoadingApp);
