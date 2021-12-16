// Create namesake
const creativeApp = {};

creativeApp.menuSelector = document.getElementById("mobile-button");
creativeApp.menu = document.querySelector('.mobile-nav');

creativeApp.menuSelector.addEventListener('click', function () {
    creativeApp.menu.classList.toggle('show');
    console.log('click');
})