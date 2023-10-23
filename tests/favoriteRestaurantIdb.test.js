import { itActAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/public/data/favorite-restaurant-idb";

describe('Favorite restaurant Idb Contract Test Implementation', () => {
   afterEach(async () => {
     (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
       await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
     });
   });
  
   itActAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
 });