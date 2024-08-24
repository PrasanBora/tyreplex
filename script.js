
let customCurrentSlide = 0;

function customChangeSlide() {
  const customSlides = document.querySelectorAll('.custom-carousel-item');
  customCurrentSlide = (customCurrentSlide + 1) % customSlides.length;
  document.querySelector('.custom-carousel-inner').style.transform = `translateX(-${customCurrentSlide * 100}%)`;
}

setInterval(customChangeSlide, 3000); // Change slide every 3 seconds
