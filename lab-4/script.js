// Question 1

// const page = open("site.html", "_blank", "width=500,height=500");

// page.onload = () => {
//   page.scroll(0, page.document.body.scrollHeight);
//   // Try to write your name on the small window document using document.write (what is the problem).
//   // write method removes all the document content and rewrites the content inside the function parameters
//   page.document.write("<h1>Mina Medhat Mounir</h1>");
//   // check if the small window still opened, close it.
//   if (!page.closed) page.close();
// };

// Question 2

// Find all images in page by two ways (document default collection and document methods).
const $images1 = document.images;
const $images2 = document.getElementsByTagName("img");

// Find all options for city drop down list.
const $select = document.querySelector("#cities");

for (let i = 0; i < $select.length; i++) {
  console.log($select[i].value);
}

// Find all rows(tds) for second table in page.
const $table2 = document.querySelectorAll("table")[1];
const $rows2 = $table2.querySelectorAll("td");

// Find all elements that contain class name fontBlue and BGrey.
const $divs = document.querySelectorAll(".BGrey.fontBlue");

// Question 3

// Display the date with time on the document title (document.title)
// which changes every second to show time with date.
const time = new Date();
document.title = time.toLocaleString();

// Using location Object with simple HTML Form Page
// With get method, after clicking submit button show the Name and Age on page console as an object.
const url = location.href.split("?")[1];
const params = url.split("&");
const obj = new Object();

params.map((element) => {
  const arr = element.split("=");
  obj[arr[0]] = arr[1];
});

console.log(obj);
