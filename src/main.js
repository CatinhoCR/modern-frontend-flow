import App from './app.js';

const app = new App();

// Listen on hash change:
window.addEventListener('hashchange', () => app.router());
// Listen on page load:
window.addEventListener('load', () => app.init());