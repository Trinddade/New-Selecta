// js/carousel.js
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].style.display = 'none'; // Oculta o item atual
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.display = 'block'; // Exibe o próximo item
}

setInterval(showNextItem, 10000);
