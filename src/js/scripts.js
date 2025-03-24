window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var links = navbar.getElementsByTagName("a"); // Selecciona todos los enlaces dentro del navbar
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white"; // Cambia el color de fondo a blanco

    // Cambia el color de los enlaces a negro
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }
  } else {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = ""; // Restablece el color de fondo

    // Restablece el color de los enlaces
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = ""; // Restablece el color de los enlaces
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const featuresSection = document.querySelector(".features-container");

  // Configuración del Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          featuresSection.classList.add("visible"); // Agrega la clase cuando entra en pantalla
        }
      });
    },
    { threshold: 0.3 } // Se activará cuando el 30% de la sección sea visible
  );

  observer.observe(featuresSection);
});
