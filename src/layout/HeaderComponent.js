"use strict";

import Utils from './../helpers/Utils';
// import template from './../templates/header.html';

export default class HeaderComponent {
    constructor() {

    }

    async render() {
        this.brandTitle = "Boilerplate";
        return await this.template();
    }

    async after_render() {

    }

    /* async templatesss() {
        const HeaderContent = /*html* /`${template}`;
        return HeaderContent;
    } */

    async template() {
        // this could be moved to a static HTML file that gets imported in the render function. Leaving as is for now.
        const HeaderContent = /*html*/`
            <nav class="navbar main-nav" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="" href="/#/">
                            <h1>${this.brandTitle}</h1>
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu ${this.navClass}" aria-expanded="false">
                        <div class="">
                            <a class="navbar-item" href="/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/#/about">
                                About
                            </a>
                            <!--<button type="button" class="btn" id="add-post-btn" data-target="create-post-form">
                                Add New Article
                            </button>-->
                            <!--<a class="navbar-item" href="/#/about">
                                About
                            </a>
                            <a class="navbar-item" href="/#/secret">
                                Secret
                            </a>-->
                        </div>
                        <!--<div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary" href="/#/register">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>-->
                    </div>
                </div> <!-- container -->
            </nav>
        `;
        return HeaderContent;
    }
}