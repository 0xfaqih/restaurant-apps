import FavoriteRestaurantIdb from "../src/public/data/favorite-restaurant-idb";
import * as TestFactories from './helpers/testFactories';

describe('favorite a restaurant', () => {
   const addFavoriteButtonContainer = () => {
      document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
   };

   beforeEach(() => {
      addFavoriteButtonContainer();
   });

   it('should show the favorite button when the restaurant has not been favorited before', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});
      
      expect(document.querySelector('[aria-label="add to favorited this restaurant"]')).toBeTruthy();
   });

   it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      expect(document.querySelector('[aria-label="remove from favorited this restaurant"]')).toBeFalsy();
   });

   it('should be able to favorite the restaurant', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

      // Memastikan restoran berhasil disukai
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
      expect(restaurant).toEqual({ id: 1 });

      await FavoriteRestaurantIdb.deleteRestaurant(1);
   });

   it('should not add a restaurant again when its already favorited', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1});

      // Tambahkan restoran dengan ID 1 ke daftar restoran yang difavoritkan
      await FavoriteRestaurantIdb.putRestaurants({ id: 1 });
      // Simulasikan pengguna menekan tombol tambahkan ke favorit
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

      // Tidak ada restoran yang ganda
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

      await FavoriteRestaurantIdb.deleteRestaurant(1);
   });

   it('should not add a restaurant when it has no id', async () => {
      await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});