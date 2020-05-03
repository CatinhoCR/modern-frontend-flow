// import * as moment from 'moment';

export default class AboutModel {
    constructor() {
        // this.moment = moment();
    }
    init() {

    }

    GetPosts() {
        var posts = fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
        })
            .then(
                response => response.json(),
                error => error)
            .then((posts) => {
                return posts;
            })
            .catch((err) => {
                console.log(error);
            });
        return posts;
    }
}