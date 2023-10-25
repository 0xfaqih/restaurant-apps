import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../../public/data/restaurant-source';
import { createFormReviewTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitator from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../../public/data/favorite-restaurant-idb';

const Detail = {
  async render() {
    const heroAppElement = document.querySelector('hero-app');
    heroAppElement.style.display = 'none';

    return `
     <div id="restaurant" class="restaurant"></div>
     <div id="favoriteButtonContainer"></div>
     <div id="addReviewContainer"></div>
     `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewsContainer = document.querySelector('#addReviewContainer');
    reviewsContainer.innerHTML = createFormReviewTemplate();

    FavoriteButtonInitator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { id } = restaurant;
      const name = document.getElementById('name').value;
      const reviewText = document.getElementById('review').value;

      const reviewData = {
        id,
        name,
        review: reviewText,
      };

      try {
        await RestaurantSource.addReview(reviewData);

        const successMessage = 'Review berhasil ditambahkan';
        const reviewFormTitle = document.querySelector('.title-review-form');
        reviewFormTitle.textContent = successMessage;
        reviewFormTitle.style.color = 'green';
      } catch (error) {
        const reviewFormTitle = document.querySelector('.title-review-form');
        reviewFormTitle.style.color = 'red';
        reviewFormTitle.textContent = 'Terjadi kesalahan saat menambahkan ulasan.';
      }
    });
  },
};

export default Detail;
