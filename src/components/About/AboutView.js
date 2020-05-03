export default class AboutView {
    constructor() {
        
    }
    async render() {
    }
    async after_render() {
    }
    template(post, i) {
        let article;
        article = /*html*/`
            <div class="article list-item col col-4">
                <button type="button" class="delete-post delete-btn btn" id="deleteIndex-${i}">X</button>
                <a href="/#/post/${post.id}" class="show-post" id="post-${post.id}">
                    <span class="category">News</span>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <span class="date">10.14.19</span>
                </a>
            </div>
        `;
        return article;
    }
    
}