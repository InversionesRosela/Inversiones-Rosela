document.addEventListener("DOMContentLoaded", function() {
    var abrirMenu = document.getElementById('abrir');
    var cerrarMenu = document.getElementById('cerrar');
    var nav = document.getElementById('nav');
    var overlay = document.getElementById('overlay');

    abrirMenu.addEventListener('click', function() {
        nav.classList.add('visible');
        overlay.style.display = "block";
    });

    cerrarMenu.addEventListener('click', function() {
        nav.classList.remove('visible');
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('visible');
        overlay.style.display = "none";
    });
});