import API_ENDPOINT from '../../scripts/globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responsejson = await response.json();
    return responsejson.restaurant;
  }

  static async addReview(reviewData) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  }
}

export default RestaurantSource;
