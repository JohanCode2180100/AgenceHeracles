// recupere tout les elements du DOM

const itemsSlide = document.querySelectorAll(".container-slides img");
const nbSlides = itemsSlide.length;
const afterSlide = document.querySelector(".right");
const beforeSlide = document.querySelector(".left");

//init le compteur de defilement a 0
let count = 0;

//ecoute du clic sur afterSlide
afterSlide.addEventListener("click", after_Slide);

//execute la function after_slide
function after_Slide() {
  itemsSlide[count].classList.remove("active");

  //count inferieur a la taille du tableau 3 - 1
  if (count < nbSlides - 1) {
    count++;
  } else {
    count = 0;
  }
  itemsSlide[count].classList.add("active");
}

//ecoute du clic sur beforeSlide
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
console.log(nbSlides);
