const sliderContainer = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const items = document.querySelectorAll('.menu-item');
const itemCount = items.length;
const itemsToShow = 2;

function updateSlider() {
  const itemWidth = items[0].offsetWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
}

function showNext() {
  if (currentIndex < itemCount - itemsToShow) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSlider();
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = itemCount - itemsToShow; 
  }
  updateSlider();
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);
