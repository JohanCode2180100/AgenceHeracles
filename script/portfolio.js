//slider portfolio

const sliderportfolio = document.querySelector(".slider-portfolio");
const srcEnCoursSlider = document.querySelector(".visibled-slider");
const allpicsPortfolio = Array.from(
  document.querySelectorAll(".grid-item img")
);

const rightPortfolio = document.querySelector(".btn-right");
const leftPortfolio = document.querySelector(".btn-left");
const closeSlide = document.querySelector(".btn-fermer-slider");

let photoEncours;
let indexEnCours;

allpicsPortfolio.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderportfolio.style.display = "block";
    srcEnCoursSlider.src = e.target.src;
    photoEncours = e.target;
    indexEnCours = allpicsPortfolio.indexOf(photoEncours);

    console.log(indexEnCours);
  });
});

rightPortfolio.addEventListener("click", () => {
  if (indexEnCours === 11) {
    indexEnCours = 0;
    srcEnCoursSlider.src = allpicsPortfolio[indexEnCours].src;
    photoEncours = allpicsPortfolio[indexEnCours];
  }
  srcEnCoursSlider.src = allpicsPortfolio[indexEnCours + 1].src;
  photoEncours = allpicsPortfolio[indexEnCours + 1];
  indexEnCours = allpicsPortfolio.indexOf(photoEncours);
  console.log(indexEnCours);
});

leftPortfolio.addEventListener("click", () => {
  if (indexEnCours === 0) {
    indexEnCours = 11;
    srcEnCoursSlider.src = allpicsPortfolio[indexEnCours].src;
    photoEncours = allpicsPortfolio[indexEnCours];
  }
  srcEnCoursSlider.src = allpicsPortfolio[indexEnCours - 1].src;
  photoEncours = allpicsPortfolio[indexEnCours - 1];
  indexEnCours = allpicsPortfolio.indexOf(photoEncours);
  console.log(indexEnCours);
});

closeSlide.addEventListener("click", () => {
  sliderportfolio.style.display = "none";
});
