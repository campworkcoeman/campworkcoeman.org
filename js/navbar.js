var navbar = document.getElementById('navbar'),
    toggle = document.getElementsByClassName('navbar-toggle')[0],
    collapse = document.getElementsByClassName('navbar-collapse')[0];

switchScroll();

function switchScroll() {
    if (window.scrollY > 185 && document.body.clientWidth >= 768) {
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

var dropdowns = document.getElementsByClassName('dropdown');

function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
        dropdowns[j].classList.remove('open');
    }
}

for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
        if (document.body.clientWidth < 768) {
            var open = this.classList.contains('open');
            closeMenus();
            if (!open) {
                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                this.classList.toggle('open');
            }
        }
    });
}

function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        closeMenus();
        collapse.classList.add('collapse');
        collapse.classList.remove('in');
    }
}

document.addEventListener('scroll', switchScroll, false);
window.addEventListener('resize', switchScroll, false);
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);
