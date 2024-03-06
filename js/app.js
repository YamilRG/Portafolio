document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  // Cerrar el menú al hacer clic en un enlace
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });
});
