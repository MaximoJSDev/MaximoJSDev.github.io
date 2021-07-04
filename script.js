//Sticky
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 1);
});

//Responsive
menuResponsive = document.querySelector(".menu-responsive");
menuResponsive.addEventListener("click", () => {
  menu = document.querySelector("#IDMenu");
  menu.classList.toggle("menu");

  button = document.querySelectorAll(".a");
  button.forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("menu");
    });
  });
});


//Quitar Menu
