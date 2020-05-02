"use strict";
// import "regenerator-runtime/runtime";
import Utils from './../helpers/Utils';
import DashboardCtrl from './../DashboardListing/DashboardController';
import SinglePostCtrl from './../SinglePost/SinglePostController';

export default class Router {
    constructor() {
        this.DashboardCtrl = new DashboardCtrl();
        this.SinglePostCtrl = new SinglePostCtrl();
        // this.Utils = new Utils();
        const routes = {
            '/': this.DashboardCtrl,
            '/post/:id': this.SinglePostCtrl
        };
    }
    async router_init () {
        // Lazy load view element:
        const content = null || document.getElementById('page_container');

        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL();

        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
    }


}