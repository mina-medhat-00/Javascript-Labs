const $table = document.querySelector("table").tBodies[0];

(async function response() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .catch((err) => console.error(err));
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .catch((err) => console.error(err));
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((data) => data.json())
    .catch((err) => console.error(err));

  users.forEach((user) => {
    const tr = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const companyCell = document.createElement("td");
    const addressCell = document.createElement("td");
    const postsCell = document.createElement("td");
    const postsList = document.createElement("ul");

    const userPosts = posts.filter((post) => post.userId === user.id);

    const commentsCount = {};
    userPosts.forEach((userPost) => {
      const count = comments.filter(
        (comment) => comment.postId === userPost.id
      ).length;
      commentsCount[userPost.id] = count;
    });

    nameCell.textContent = user.name;
    emailCell.textContent = user.email;
    companyCell.textContent = user.company.name;
    addressCell.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}
                              Geo: ${user.address.geo.lat}:${user.address.geo.lng}`;
    userPosts.forEach((userPost) => {
      const li = document.createElement("li");
      li.textContent = `${userPost.title}, Comments: ${
        commentsCount[userPost.id]
      }`;
      postsList.appendChild(li);
    });

    postsCell.appendChild(postsList);
    tr.append(nameCell, emailCell, companyCell, addressCell, postsCell);
    $table.appendChild(tr);
  });
})();
