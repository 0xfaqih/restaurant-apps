import { async } from "regenerator-runtime";
import FavoriteButtonInitator from "../../src/scripts/utils/favorite-button-presenter";
import FavoriteRestaurantIdb from "../../src/public/data/favorite-restaurant-idb";
const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
   await FavoriteButtonInitator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants : FavoriteRestaurantIdb,
      restaurant,
   });
};

export { createFavoriteButtonPresenterWithRestaurant };