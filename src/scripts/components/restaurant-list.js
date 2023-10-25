import RestaurantSource from '../../public/data/restaurant-source';
import { createRestaurantItemTemplate } from '../views/templates/template-creator';

class RestaurantListCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.showLoading();
    this.fetchRestaurantList();
  }

  async fetchRestaurantList() {
    try {
      const restaurants = await RestaurantSource.listRestaurant();
      const restaurantsContainer = this.shadowRoot.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      this.hideLoading();
      this.displayError();
    } finally {
      this.hideLoading();
    }
  }

  showLoading() {
    const loadingApp = document.createElement('loading-app');
    loadingApp.setAttribute('loading', '');
    this.shadowRoot.appendChild(loadingApp);
  }

  hideLoading() {
    const loadingApp = this.shadowRoot.querySelector('loading-app');
    if (loadingApp) {
      loadingApp.removeAttribute('loading');
      this.shadowRoot.removeChild(loadingApp);
    }
  }

  displayError() {
    const errorMessage = document.createElement('h3');
    errorMessage.textContent = 'Gagal memuat data restoran. Silakan coba lagi.';
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    const restaurantsContainer = this.shadowRoot.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurantsContainer.appendChild(errorMessage);
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

    .card__list {
      margin: 30px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .card__item {
      border-radius: 10px;
      background-color: #f5f5fa;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease;
      position: relative;
      width: 100%;
    }
    
    .card__item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    
    .card__item h3 {
      position: absolute;
      background-color: #000000c5;
      color: #fdd037;
      font-size: medium;
      margin-top: 12px;
      padding: 9px;
      border-radius: 0 5px 5px 0;
    }
    
    .card__item p {
      margin: 10px;
      font-size: 13px;
    }
    
    .card__item h4 {
      margin: 10px;
      font-size: 16px;
    }
    
    .card__item img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    h4 a {
      text-decoration: none;
      color: #1f1f29;
      display: inline-block;
      height: 44px;
      line-height: 44px;
    }

    @media screen and (max-width: 499px) {
    
      .card__list {
        grid-template-columns: 1fr;
      }
    }
    
    @media screen and (min-width: 700px) {
      .card__list {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media screen and (min-width: 900px) {

      .card__list {
        grid-template-columns: 1fr 1fr 1fr;
      }
    
      .card__item h3 {
        font-size: 17px
      }
    
      .card__item p {
        font-size: 14px;
      }
    
      .card__item h4 {
        font-size: 17px;
      }
    }
    </style>
    <div id="restaurants" class="card__list">
    </div>
      
    `;
  }
}

customElements.define('restaurant-list-card', RestaurantListCard);
