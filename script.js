document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('button-menu');
    var nav = document.querySelector('nav');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});

