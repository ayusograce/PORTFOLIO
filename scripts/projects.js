// projects.js
// Archivo que contiene la información de los proyectos para el portafolio

const projects = [
  {
    title: {
      en: "Book Discovery App",
      es: "Aplicación de Descubrimiento de Libros"
    },
    description: {
      en: "MVC app with Node.js and JWT for book searching and recommendations.",
      es: "Aplicación MVC con Node.js y JWT para buscar y recomendar libros."
    },
    tech: "Node.js, Express, EJS",
    image: "assets/images/book-app.JPG",
    live: "https://bookrecapp25.netlify.app/",
    repo: "https://github.com/ayusograce/bookRecApp.git"
  },
  {
    title: {
      en: "Camping Store",
      es: "Tienda de Campamento"
    },
    description: {
      en: "Group front-end project to explore and purchase camping gear.",
      es: "Proyecto grupal de Front End para ver información sobre productos de acampar y comprarlos."
    },
    tech: "JavaScript, HTML, Node.js",
    image: "assets/images/camping-store.JPG",
    live: "https://sleepout-team11.netlify.app/",
    repo: "https://github.com/ayusograce/wdd330-sleepoutside-team11.git"
  },
  {
    title: {
      en: "Vehicles Site",
      es: "Sitio de Vehículos"
    },
    description: {
      en: "MVC app to browse car information and post comments.",
      es: "Aplicación MVC para ver información sobre autos y dejar comentarios."
    },
    tech: "Node.js, Express, EJS, NoSQL",
    image: "assets/images/vehicles-site.JPG",
    live: "https://cse340-n3we.onrender.com/",
    repo: "https://github.com/ayusograce/CSE340-starter.git"
  },
  {
    title: {
      en: "Book Club Website",
      es: "Sitio Web Club de Lectura"
    },
    description: {
      en: "Website for a virtual book club.",
      es: "Sitio web para un club de libros virtual."
    },
    tech: "JavaScript, HTML, CSS",
    image: "assets/images/book-club.JPG",
    live: "https://ayusograce.github.io/wdd231/project/home",
    repo: "https://github.com/ayusograce/wdd231/tree/main/project"
  },
  {
    title: {
      en: "Commerce Chamber Site",
      es: "Sitio Cámara de Comercio"
    },
    description: {
      en: "Website for a local chamber of commerce.",
      es: "Sitio web para una cámara de comercio local."
    },
    tech: "JavaScript, HTML, CSS",
    image: "assets/images/chamber.JPG",
    live: "https://ayusograce.github.io/wdd231/chamber/index",
    repo: "https://github.com/ayusograce/wdd231/tree/main/chamber"
  },
  {
    title: {
      en: "Bakery Website",
      es: "Sitio Web de Pastelería"
    },
    description: {
      en: "Website for a local bakery.",
      es: "Sitio web para una pastelería local."
    },
    tech: "JavaScript, HTML, CSS",
    image: "assets/images/irresistible-gourmet.JPG",
    live: "https://ayusograce.github.io/wdd131/project/home",
    repo: "https://github.com/ayusograce/wdd131/tree/main/project"
  }
];


function getLanguageFromHTML() {
  return document.documentElement.lang.startsWith("en") ? "en" : "es";
}

function renderProjects(language = "es") {
  const container = document.querySelector("#projects-container");
  container.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project");

    const techLabel = language === "en" ? "Tech:" : "Tecnologías:";
    const githubLabel = language === "en" ? "View on GitHub" : "Ver en GitHub";

    card.innerHTML = `
      <a href="${project.live}" target="_blank" rel="noopener noreferrer" id="project-link">
        <img src="${project.image}" alt="${project.title[language]}" />
      </a>
      <div class="project-content">
        <h3>${project.title[language]}</h3>
        <p>${project.description[language]}</p>
        <p id="tech"><strong>${techLabel}</strong> ${project.tech}</p>
        <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn" id="github-link">${githubLabel}</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Detectar el idioma automáticamente desde el atributo lang del HTML
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLanguageFromHTML();
  renderProjects(lang);
});


