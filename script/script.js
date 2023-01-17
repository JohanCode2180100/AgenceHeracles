const itemsSlide = document.querySelectorAll(".container-slides img");
const nbSlides = itemsSlide.length;
const afterSlide = document.querySelector("right");
const beforeSlide = document.querySelector("left");
let count = 0;

afterSlide.addEventListener("click", after_Slide);

function after_Slide() {
  itemsSlide[count].classList.remove("active");

  if (count < nbSlides - 1) {
    count++;
  } else {
    count = 0;
  }
  itemsSlide[count].classList.add("active");
}

beforeSlide.addEventListener("click", before_Slide);

function before_Slide() {
  itemsSlide[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlides - 1;
  }
  itemsSlide[count].classList.add("active");
}
