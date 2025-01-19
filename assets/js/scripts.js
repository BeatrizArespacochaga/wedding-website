/*
// Aquí puedes agregar funcionalidades adicionales, como la validación de formularios,
// animaciones, o interacciones de la página.
console.log("Página cargada correctamente");

// Ejemplo de animación para el botón de RSVP
document.querySelector('.btn-rsvp').addEventListener('click', function() {
    alert("¡Gracias por confirmar tu asistencia!");
}); 
*/

console.log("Página cargada correctamente");

// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

// Evento para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Agrega/quita la clase 'active'
});

document.addEventListener("DOMContentLoaded", () => {
    //const logo = document.querySelector(".logo");
    const header = document.querySelector("header.menu-toggle");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) { // Cambia '50' según cuánto scroll deseas que se necesite.
            logo.classList.add("logo-visible");
            logo.classList.remove("hidden-logo");
            header.classList.add("scrolled"); // Para aplicar otros cambios al header.
        } else {
            logo.classList.remove("logo-visible");
            logo.classList.add("hidden-logo");
            header.classList.remove("scrolled");
        }
    });
});
