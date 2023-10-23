Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('pierce/.restaurant-title a');
  I.click('pierce/.restaurant-title a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
});

Scenario('showing favorited restaurants and unlike restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Restoran Favorit Kamu');

  I.seeElement('pierce/.restaurant-title a');
  I.click('pierce/.restaurant-title a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran dalam daftar favorit Anda');
});
