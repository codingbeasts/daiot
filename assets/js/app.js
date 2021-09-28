var navbar = document.querySelector(".navbar");
var openBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  navbar.classList.add("show-navbar");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show-navbar");
});
/*
 * javascript slider
 * */

const track = document.querySelector(".carousel");
const slides = Array.from(track.children);
const nav_dots = document.querySelector(".nav-indicator");
const dots = Array.from(nav_dots.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = function (track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

nav_dots.addEventListener("click", function (e) {
  const targetDot = e.target.closest("li");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = nav_dots.querySelector(".active");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove("active");
  targetDot.classList.add("active");
});
