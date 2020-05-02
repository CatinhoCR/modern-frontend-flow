import "regenerator-runtime/runtime";
import Utils from './helpers/Utils';
// import Router from './config/Routing';

import HeaderComponent from './layout/HeaderComponent';
import Error404Component from './layout/Error404Component';

import DashboardCtrl from './components/Dashboard/DashboardController';
import AboutCtrl from './components/About/AboutController';
class App {
    constructor() {
        console.info('ES6 Modules work!');
        this.Navbar = new HeaderComponent();
        this.DashboardCtrl = new DashboardCtrl();
        this.AboutCtrl = new AboutCtrl();
        this.Error404 = new Error404Component();
    }
    async init() {
        this.header = null || document.getElementById('header-container');
        this.content = null || document.getElementById('page-container');
        this.routes = {
            '/': this.DashboardCtrl,
            '/about': this.AboutCtrl
        };
        // This would need to be moved to router.js, imported and used from there. Not here... also there are hundreds of improvements to make here, plus the 404 is not really set up, for now it just exists and works at functional but basic level.
        await this.router();
    }
    async router() {
        this.header.innerHTML = await this.Navbar.render();
        await this.Navbar.after_render();

        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL();

        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

        // Get the page from our hash of supported routes.
        // If the parsed URL is not in our list of supported routes, select the 404 page instead
        let page = this.routes[parsedURL] ? this.routes[parsedURL] : this.Error404;
        this.content.innerHTML = await page.setupView();
        await page.after_setup();
    }
}

export default App;
