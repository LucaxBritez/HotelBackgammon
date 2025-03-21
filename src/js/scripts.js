// Navbar sticky con desplazamiento suave
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
  
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  