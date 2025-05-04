const $table = document.querySelector("table").tBodies[0];

(async function response() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
      users.forEach((user) => {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        const email = document.createElement("td");
        const company = document.createElement("td");
        const address = document.createElement("td");
        const posts = document.createElement("td");

        name.textContent = user.name;
        email.textContent = user.email;
        company.textContent = user.company.name;
        address.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city} Geo: ${user.address.geo.lat}:${user.address.geo.lng}`;
        tr.append(name, email, company, address, posts);
        $table.appendChild(tr);
      });
    })
    .catch((err) => console.error(err));
})();
