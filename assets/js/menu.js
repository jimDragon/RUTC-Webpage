var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

// Open Menu
menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
})

// Close Menu
exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
})

