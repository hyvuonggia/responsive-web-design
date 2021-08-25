// navbar have color when scroll down
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

// parallax scrolling for banner image
const parallax = document.getElementsByClassName("banner-image");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax[0].style.backgroundPositionY = offset * 0.6 + "%"
})