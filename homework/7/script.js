const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

let posts;
let comments;

const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.error(e));
};

const toHashMap = (arr) => {
  const obj = {};

  arr.map((item) => (obj[item.id] = item));

  return obj;
};

Promise.allSettled([getData(URL_POSTS), getData(URL_COMMENTS)])
  .then((responses) => {
    responses.map((result) => {
      if (result.status === "fulfilled") {
        if (result.value[0].userId) {
          posts = toHashMap(result.value);
        } else {
          comments = result.value;
          console.log(comments);
        }
      }
    });
  })
  .then(() => {
    comments.map((comment) => {
      const post = posts[comment.postId];

      if (post.children) {
        post.children.push(comment);
      } else {
        post.children = [comment];
      }
    });
  })
  .then(() => {
    console.log(posts);
  })
  .catch(console.error);
