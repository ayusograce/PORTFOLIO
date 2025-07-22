console.log("Portafolio cargado");


//The button and navigation (phone version)
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Scroll animation con Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Selecciona todos los elementos que quieras animar
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));


// Sombra al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Resaltar enlace activo en el menú
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, {
    threshold: 0.6, // Detecta cuando el 60% de la sección es visible
  });

  sections.forEach((section) => {
    observador.observe(section);
  });