// loadHeader.js
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger');
  const mobileMenuList = document.querySelector('.mobile-menu-list');

  if (burgerButton && mobileMenuList) {
    burgerButton.addEventListener('click', () => {
      mobileMenuList.classList.toggle('hidden'); // Muestra u oculta el menú
    });
  }
});

let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  index += step;
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

console.log("Página cargada correctamente");

// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

// Evento para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Agrega/quita la clase 'active'
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
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
