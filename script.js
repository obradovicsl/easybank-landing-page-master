const hamburgerEl = document.querySelector('.hamburger-menu');
const backdropEl = document.querySelector('.backdrop');
const mobileNavEl = document.querySelector('.mobile-nav');

hamburgerEl.addEventListener('click', function () {
    hamburgerEl.classList.toggle('active');
    backdropEl.classList.toggle('hidden');
    mobileNavEl.classList.toggle('hidden');
});

backdropEl.addEventListener('click', function () {
    hamburgerEl.classList.toggle('active');
    backdropEl.classList.toggle('hidden');
    mobileNavEl.classList.toggle('hidden');
})