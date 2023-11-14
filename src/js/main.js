const slides = document.querySelectorAll(".About-testimonials-slide");
const slider = document.querySelector(".About-testimonials-slides");
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  if (currentSlide === 0) {
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0)`;
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease";
      }, 50);
    }, 550);
  } else {
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
}

setInterval(nextSlide, 2000);
