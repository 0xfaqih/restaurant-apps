import { itActAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";
     
let favoriteRestaurants = [];
 
const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },
 
  getAllRestaurants() {
    return favoriteRestaurants;
  },
 
  putRestaurants(restaurant) {
    
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
 
    favoriteRestaurants.push(restaurant);
  },
 
  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
  },
};
 
describe('Favorite restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });
 
  itActAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});