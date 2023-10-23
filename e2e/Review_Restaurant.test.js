Feature('Review Restaurants');

Before(({ I }) => {
   I.amOnPage('/');
   I.seeElement('pierce/.restaurant-title a');
   I.click('pierce/.restaurant-title a');
});

Scenario('showing review form and fill review', ({ I }) => {
  I.see('Kirim Ulasan', 'pierce/.title-review-form');

  I.fillField('name', 'Your name');
  I.fillField('review', 'Your review');
  I.pressKey('Enter');

  I.see('Review berhasil ditambahkan', 'pierce/.title-review-form');
});