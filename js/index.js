// Carousel for Product
var elem = document.querySelector(".main-carousel");
var flktyProduct = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});

// previous
var previousButton = document.querySelector(".btn__previous");
previousButton.addEventListener("click", function () {
  flktyProduct.previous(true);
});

// next
var nextButton = document.querySelector(".btn__next");
nextButton.addEventListener("click", function () {
  flktyProduct.next(true);
});

// Carousel for Banner
var banner = document.querySelector(".banner__slider");
var flktyBanner = new Flickity(banner, {
  // options
  cellAlign: "left",
  contain: true,
});
// banner next
var bannerNextBtn = document.querySelector(".banner__slider-btn--next");
bannerNextBtn.addEventListener("click", function () {
  flktyBanner.next(true);
});

// banner previous
var bannerPrevBtn = document.querySelector(".banner__slider-btn--previous");
bannerPrevBtn.addEventListener("click", function () {
  flktyBanner.previous(true);
});
