let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector("#search");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  //   console.log("clicked");
});
