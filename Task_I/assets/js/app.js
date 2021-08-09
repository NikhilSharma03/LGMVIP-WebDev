const sdButton = document.querySelector(".header__hamburger");
const sideDrawer = document.querySelector(".sidedrawer__container");
const sdLink = document.querySelectorAll(".sidedrawer__nav--ul li a");

sdButton.addEventListener("click", function () {
  sideDrawer.classList.toggle("open");
});

sdLink.forEach((item) =>
  item.addEventListener("click", function () {
    sideDrawer.classList.toggle("open");
  })
);
