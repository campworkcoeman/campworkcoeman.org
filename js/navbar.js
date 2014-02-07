var navbar = document.getElementById('navbar'),
    toggle = document.getElementsByClassName('navbar-toggle')[0],
	collapse = document.getElementsByClassName('navbar-collapse')[0];

document.addEventListener('scroll', switchScroll, false);
window.addEventListener('resize', switchScroll, false);
toggle.addEventListener('click', toggleMenu, false);

switchScroll();

function switchScroll() {
    if (window.scrollY > 185 && document.body.clientWidth > 767) {
        navbar.classList.remove('navbar-static-top');
        navbar.classList.add('navbar-fixed-top');
    } else {
        navbar.classList.remove('navbar-fixed-top');
        navbar.classList.add('navbar-static-top');
    }
}

function toggleMenu() {
	collapse.classList.toggle('collapse');
	collapse.classList.toggle('in');
}