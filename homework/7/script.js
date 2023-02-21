const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

let posts;

const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.error(e));
};

getData(URL_POSTS).then((res) => {
  console.log(res);
  // posts = toHashMap(res);
});

const toHashMap = (arr) => {
  const obj = {};

  arr.reduce();
  arr.map((item) => (obj[item.id] = item));

  return obj;
};

Promise.allSettled([getData(URL_POSTS), getData(URL_COMMENTS)]).then(
  (responses) => {
    responses.map((result) => {
      console.log(result);

      if (result.value[0].userId) {
        console.log("posts: ", result);
      } else {
        console.log("comments: ", result);
      }
    });
  }
);
