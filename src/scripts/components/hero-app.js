class HeroApp extends HTMLElement {
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
   }
   
   body {
     font-family: 'Montserrat', sans-serif;
     font-size: 12px;
     color: #1f1f29;
   }
   
   .hero {
     display: flex;
     align-items: center;
     min-height: 380px;
     width: 100%;
     text-align: center;
     background-image: url('../images/heros/hero.jpg');
     background-position: center;
     background-color: green;
   }
   
   .hero__inner {
     display: flex;
     align-items: center;
     flex-direction: column;
     padding: 30px 20px;
     min-width: 100%;
     background-color: rgba(0, 0, 0, 0.541);
   }
   
   .hero__title {
     color: #fff;
     font-weight: 600;
     font-size: 25px;
     max-width: 800px;
   }
   
   .hero__tagline {
     color: #fff;
     max-width: 800px;
     margin-top: 16px;
     font-size: 18px;
     font-weight: 300;
   }
     </style>

  <div class="hero">
    <div class="hero__inner">
      <h2 class="hero__title">Dapatkan Kekenyangan Duniawi Dengan Kuliner yang Tak Terlupakan</h2>
      <p class="hero__tagline">
        Jelajahi ragam kuliner Indonesia di restoran-restoran yang tersebar di seluruh Indonesia. Rasakan kelezatan
        hidangan tradisional dan nikmat kekenyangan
      </p>
    </div>
  </div>
     `;
  }
}

customElements.define('hero-app', HeroApp);
