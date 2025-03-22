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
