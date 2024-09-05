import '../scss/styles.scss';

// import * as bootstrap from 'bootstrap';


document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var navbarToggler = document.querySelector('.navbar-toggler');
    var fullscreenMenu = document.querySelector('.fullscreen-menu');
    var closeMenu = document.querySelector('.close-menu');
    var navbarBrand = document.querySelector('.navbar-brand');
    var navLinks = document.querySelectorAll('#nav-link');
    var navbarTogglerIcon = document.querySelector('.fa-sharp');
    var hiddenLinks = document.querySelectorAll('#hidden-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 5) {
            navbar.classList.add('navbar-light', 'navbar-scroll');
            navbarBrand.style.color = 'black';
            navbarTogglerIcon.style.color = 'black';
            for (const navLink of navLinks) {
                navLink.style.color = 'black';
            }
            
        } else {
            navbar.classList.remove('navbar-light', 'navbar-scroll');
            navbar.style.backgroundColor = 'transparent';
            navbarBrand.style.color = 'white';
            navbarTogglerIcon.style.color = 'white';
            for (const navLink of navLinks) {
                navLink.style.color = 'white';
            }
        }
    });

    navbarToggler.addEventListener('click', function() {
        fullscreenMenu.classList.add('show');
    });

    closeMenu.addEventListener('click', function() {
        fullscreenMenu.classList.remove('show');
    });

    for (const hiddenLink of hiddenLinks) {
        hiddenLink.addEventListener('click', function() {
            fullscreenMenu.classList.remove('show');
        });
    }

});

var typed = new Typed(".auto-type", {
    strings: ["Junior Back-End Developer", "Computer Science Student"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});