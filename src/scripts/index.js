import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/header-app';
import './components/hero-app';
import './components/restaurant-list';
import './components/footer-app';
import './components/loading';

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  mainContent.setAttribute('tabindex', '-1');
  mainContent.focus();
  mainContent.removeAttribute('tabindex');
});
