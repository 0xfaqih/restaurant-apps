import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
      <div class="card__item">
          <h3 tabindex="0">${restaurant.city}</h3>
          <img crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="gambar ${restaurant.name}">
          <p tabindex="0">Rating ⭐️${restaurant.rating}</p>
          <h4 tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h4>
      </div>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  const reviews = restaurant.customerReviews.map((review) => `
        <div class="review-item">
            <p tabindex="0"><strong>${review.name}</strong></p>
            <p tabindex="0">${review.review}</p>
            <p><em>${review.date}</em></p>
        </div>
    `).join('');

  return `
    <div class="restaurant-detail">
    <img crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="">
    <div class="title">
    <h2 tabindex="0" class="name">${restaurant.name}</h2>
    </div>
    <div class="address">
    <h3 tabindex="0">${restaurant.city}</h3>
    <p tabindex="0">${restaurant.address}</p>
    </div>
    <div class="description">
    <h3>Deskripsi Restoran</h3>
    <p tabindex="0">${restaurant.description}</p>
    </div>
    <h3 tabindex="0" class="restaurant-menu-title">Menu Restoran</h3>
    <div class="restaurant-menu">
    <div class="drinks">
        <h4 tabindex="0">Minuman:</h4>
        <ul>
            ${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
        </ul>
    </div>
    <div class="foods">
        <h4>Makanan:<h4>
        <ul>
            ${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
        </ul>
    </div>
    </div>
    <h3 tabindex="0" class="review-container-title">Review Customer</h3>
    <div class="review-container">
    ${reviews}
    </div>
    </div>
`;
};

const createFavoriteButtonTemplate = () => `
  <button aria-label="add to favorited this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove from favorited this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
<form id="reviewForm">
<h3 class="title-review-form" tabindex="0">Kirim Ulasan</h3>
<label for="name">Nama :</label>
<input type="text" id="name" name="name" required>
<label for="review">Ulasan :</label>
<input id="review" name="review" required></input>
<button type="submit">Kirim Ulasan</button>
</form>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createFormReviewTemplate,
};
