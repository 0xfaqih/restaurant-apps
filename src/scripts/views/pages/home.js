import RestaurantSource from '../../../public/data/restaurant-source';

const Home = {
  async render() {
    const heroAppElement = document.querySelector('hero-app');
    heroAppElement.style.display = '';

    return `
     <section class="explore__restaurant">
      <h2 class="title" tabindex="0">Explore Restaurant</h2>
      <restaurant-list-card></restaurant-list-card>
     </section>`;
  },

  async afterRender() {
    await RestaurantSource.listRestaurant();
  },
};

export default Home;
