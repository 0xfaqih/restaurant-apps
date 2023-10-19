import App from '../views/app';
import swRegister from '../utils/sw-register';

class HeaderApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    const app = new App({
      button: this.shadowRoot.querySelector('#menu'),
      drawer: this.shadowRoot.querySelector('#drawer'),
      content: document.querySelector('main'),
      hero: document.querySelector('hero-app'),
    });

    window.addEventListener('hashchange', () => {
      app.renderPage();
    });

    window.addEventListener('load', () => {
      app.renderPage();
      swRegister();
    });
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

    .header {
      min-height: 56px;
      transition: min-height 0.3s;
      display: flex;
    }
    
    .header__inner {
      align-self: center;
      padding-left: 30px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    
    .header__title {
      font-weight: 200px;
      font-size: 2.5em;
      margin: 0.5em 0.25em;
      display: inline-block;
      color: #1f1f29;
    }
    
    .mobile__menu {
      font-size: 32px;
      margin: 10px;
      color: #1f1f29;
      display: block;
      min-width: 44px;
      min-height: 44px;
      text-decoration: none;
      text-align: center;
    }
    
    
    .nav {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    
    .nav__list {
      width: 100%;
      padding: 0;
      margin: 0;
    }
    
    .nav__item {
      box-sizing: border-box;
      display: inline-block;
      width: 24%;
      text-align: center;
      line-height: 24px;
      text-transform: uppercase;
    }

    #menu {
      background-color: #fff;
      border: none;
    }
    
    .nav a {
      min-height: 44px;
      display: inline-block;
      padding: 1.3em;
      text-decoration: none;
      color: #1f1f29;
    }
    
    .nav a:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 499px) {
      .nav {
        z-index: 10;
        background-color: #fff;
        width: 300px;
        position: absolute;
    
        /* This trasform moves the drawer off canvas. */
        -webkit-transform: translate(-300px, 0);
        transform: translate(-300px, 0);
    
        /* Optionally, we animate the drawer. */
        transition: transform 0.3s ease;
      }
    
      .open {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
    
      .nav__item {
        display: list-item;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
        text-align: left;
      }
    }

    @media screen and (min-width: 500px) {
      .mobile__menu {
        display: none;
      }
    
      .nav__list {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    
      .nav__item {
        margin: auto;
      }
    }

    @media screen and (min-width: 800px) {
      .nav__list {
        max-width: 800px;
        margin: 0 auto;
      }
    }
    </style>

     <header class="header">
     <div class="header__inner">
       <h1 class="header__title">Kenyangin</h1>
     </div>
     <button id="menu" class="mobile__menu">☰</button>
     <nav id="drawer" class="nav">
       <ul class="nav__list">
         <li class="nav__item"><a href="#/home">Home</a></li>
         <li class="nav__item"><a href="#/favorite">Favorite</a></li>
         <li class="nav__item"><a href="https://www.linkedin.com/in/abdulfaqih">About Us</a></li>
       </ul>
     </nav>
   </header>
      `;
  }
}

customElements.define('header-app', HeaderApp);
