const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
const loader = document.getElementById("loader");

let posts;
let comments;
const postsList = document.getElementById("posts");

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
    let output = "";

    Object.values(posts).map((post) => {
      output += `
        <li class="post">
          <h3 class="post__title">${post.title}</h3>
          <p class="post__body">${post.body}</p>

          ${
            post.children
              ? `
          <details >
            <summary>Comments</summary>
          
            <ul class="post__comments">
            ${post.children
              .map(
                (comment) =>
                  `<li class="comment">
                <h4 class="comment__title">${comment.name}</h4>
                <p class="comment__body">${comment.body}</p>
                <p class="comment__email">${comment.email}</p>
              </li>`
              )
              .join("")}
            </ul>
          </details>`
              : ""
          }
        </li>
      `;
    });

    postsList.innerHTML = output;
  })
  .catch(console.error)
  .finally(() => {
    if (!loader.classList.contains("hidden")) {
      loader.classList.add("hidden");
    }
  });
