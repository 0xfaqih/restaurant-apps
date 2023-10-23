import FavoriteRestaurantIdb from '../../../public/data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const heroAppElement = document.querySelector('hero-app');
    heroAppElement.style.display = 'none';

    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Restoran Favorit Kamu</h2>
        <div id="restaurants" class="card__list">
      
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const headingElement = document.querySelector('.content__heading');

    if (restaurants.length === 0) {
      headingElement.textContent = 'Tidak ada restoran dalam daftar favorit Anda';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
