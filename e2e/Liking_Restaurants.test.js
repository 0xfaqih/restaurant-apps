const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('Tidak ada restoran dalam daftar favorit Anda');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('pierce/.restaurant-title a');

  I.click('pierce/.restaurant-title a');
  const firstRestaurantTitle = await I.grabTextFrom('pierce/.restaurant-title');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card__item');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

