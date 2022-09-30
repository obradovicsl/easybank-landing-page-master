const hamburgerEl = document.querySelector('.hamburger-menu');
const backdropEl = document.querySelector('.backdrop');
const mobileNavEl = document.querySelector('.mobile-nav');

const blockScroll = function () {
    this.window.scrollTo(0, 0);
}

hamburgerEl.addEventListener('click', function () {
    hamburgerEl.classList.toggle('active');
    backdropEl.classList.toggle('hidden');
    mobileNavEl.classList.toggle('hidden');

    if (hamburgerEl.classList.contains('active')) {

        //first detect scroll
        window.addEventListener('scroll', blockScroll)
        //And when user scroll, move it back on top of the page
    }
    else {
        alert();
        window.removeEventListener('scroll', blockScroll);
    }
});

backdropEl.addEventListener('click', function () {
    hamburgerEl.classList.toggle('active');
    backdropEl.classList.toggle('hidden');
    mobileNavEl.classList.toggle('hidden');
    window.removeEventListener('scroll', blockScroll);
})