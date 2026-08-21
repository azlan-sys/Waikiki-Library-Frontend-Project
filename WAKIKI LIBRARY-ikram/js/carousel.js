// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel-view');

  carousels.forEach(carousel => {
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const itemList = carousel.querySelector('.item-list');

    const scrollAmount = 3 * 120

    prevBtn.addEventListener('click', () => {
      itemList.scrollBy({
        left: -itemList.clientWidth,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      itemList.scrollBy({
        left: itemList.clientWidth,
        behavior: 'smooth'
      });
    });
  });
});
