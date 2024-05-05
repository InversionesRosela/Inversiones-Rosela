const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const overlay = document.querySelector("#overlay");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.classList.add("abrir-menu");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.classList.remove("abrir-menu");
});
