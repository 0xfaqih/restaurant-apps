import FavoriteButtonInitator from '../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../src/public/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unfavorite a Restaurant', () => {
   const addFavoriteButtonContainer = () => {
      document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
   };

   beforeEach(async () => {
      addFavoriteButtonContainer();
      await FavoriteRestaurantIdb.putRestaurants({ id: 1 });
   });

   afterEach(async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
   });

   it('should display unfavorite widget when the restaurant has been favorited', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      expect(document.querySelector('[aria-label="remove from favorited this restaurant"]')).toBeTruthy();
   });

   it('should not display favorite widget when the restaurant has been favorited', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      expect(document.querySelector('[aria-label="add to favorited this restaurant"]')).toBeFalsy();
   });

   it('should be able to remove favorited restaurant from the list', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      document.querySelector('[aria-label="remove from favorited this restaurant"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
   });

   it('should not throw error when user click unfavorite widget if the unfavorited restaurant is not in the list', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      // Hapus dulu restoran dari daftar restoran yang difavoritkan
      await FavoriteRestaurantIdb.deleteRestaurant(1);
      // Kemudian, simulasikan pengguna menekan widget batal memfavoritkan restoran
      document.querySelector('[aria-label="remove from favorited this restaurant"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
   });
});