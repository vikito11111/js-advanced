class Post {
    constructor(title, content) {
        this.title =  title;
        this.content = content;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`;
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    toString() {
        let result = '';

        result += `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:`

        if (this.comments.some) {
            result += `\nComments:`;
            this.comments.forEach(comment => {
                result += `\n * ${comment}`;
            });
        }

        return result.trim();
    }
}

class BlogPost extends Post {
    constructor(title, content, views) {
        super(title, content);
        this.views = 0;
    }

    view() {
        this.views++;

        return this;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }
}

let post = new Post("Post", "Content");

console.log(post.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());