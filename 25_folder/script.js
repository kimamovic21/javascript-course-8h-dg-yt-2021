// 25 Higher Order Functions

// Takes one or more functions as an argument (parameter)
// Returns a function as the result

// forEach()

import { posts } from './posts.js';

posts.forEach((post) => {
    console.log(post);
});

const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);
