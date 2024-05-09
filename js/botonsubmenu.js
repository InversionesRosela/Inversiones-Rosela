const botonMenu = document.querySelector('.abrir-menu');
const submenu = document.querySelector('.submenu');

botonMenu.addEventListener('click', () => {
    submenu.classList.toggle('mostrar-submenu');
});