fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const burgerButton = document.querySelector('.burger');
    const mobileMenuList = document.querySelector('.mobile-menu-list');

    if (burgerButton && mobileMenuList) {
      burgerButton.addEventListener('click', () => {
        mobileMenuList.classList.toggle('active'); // Usamos 'active' para mostrar/ocultar
      });
    }

    const logo = document.querySelector(".logo");
    const header = document.querySelector("header.menu-toggle");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        logo.classList.add("logo-visible");
        logo.classList.remove("hidden-logo");
        header.classList.add("scrolled");
      } else {
        logo.classList.remove("logo-visible");
        logo.classList.add("hidden-logo");
        header.classList.remove("scrolled");
      }
    });
  })
  .catch(error => console.error('Error al cargar el header:', error));
