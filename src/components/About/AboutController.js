"use strict";
import AboutModel from './AboutModel';
import AboutView from './AboutView';
import Utils from './../../helpers/Utils';

export default class AboutCtrl {
    constructor() {
        this.model = new AboutModel();
        this.view = new AboutView();
    }

    async setupView() {
        this.container = document.getElementById('page-container');
        this.posts = JSON.parse(window.localStorage.getItem('posts'));
        this.shownPosts = [];

        // 
        await this.GetPosts();
        this.show = await this.ShowPosts(this.posts);
        return this.show;
    }

    async after_setup() {
        return 'What up?';
    }

    async GetPosts() {
        if (!this.posts || this.posts === null) {
            console.log("Fetch posts from DB");
            try {
                let posts = await this.model.GetPosts();
                this.posts = posts;
                // console.log(this.posts);
                localStorage.setItem('posts', JSON.stringify(this.posts));
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Posts already exist in localStorage");
        }
        this.posts = JSON.parse(window.localStorage.getItem('posts'));
    }

    async ShowPosts(allPosts) {
        let posts = [];
        // console.log(allPosts);
        allPosts = allPosts.reverse();
        allPosts = allPosts.slice(0, 9);
        // console.log(allPosts);
        this.container.innerHTML = allPosts.forEach( (post, index) => {
            let thisPost = this.view.template(post, index);
            posts.push(thisPost);
        });
        this.shownPosts = allPosts;
        return this.container.innerHTML = posts.join('');
    }

    async UpdateView(allPosts) {
        this.container.innerHTML = '';
        let posts = [];
        this.container.innerHTML = allPosts.forEach( (post, index) => {
            let thisPost = this.view.template(post, index);
            posts.push(thisPost);
        });
        this.container.innerHTML = posts.join('');
    }
}