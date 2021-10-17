const $nav = document.querySelector(".nav");
const $navMenu = document.querySelector(".nav__menu");
const $navBtnResponsive = document.querySelector(".btn-responsive");
const $viewMoreServices = document.querySelectorAll(".services__information__view-more");
const $modalContainer = document.querySelector(".modal-container");
const $modal = document.querySelector(".modal");
const modalList = document.querySelector(".modal__lista");
const $btnExitModal = document.querySelector(".modal__btn");
const $submitForm = document.querySelector(".contact__form");
let oldBtn;

//Navbar
window.addEventListener("scroll", () => $nav.classList.toggle("sticky", window.scrollY > 10));
$navBtnResponsive.addEventListener("click", () => $navMenu.classList.toggle("menuResponsive"));
$navMenu.addEventListener("click", (e) => {
  if (e.target && e.target.className == "nav__menu__a") {
    e.target.classList.add("active");
    if (oldBtn !== undefined) oldBtn.classList.remove("active");
    oldBtn = e.target;
    $navMenu.classList.remove("menuResponsive");
  }
});

//Services
const services = [
  {
    title: "Desarrollo Frontend",
    subTitle: "Tecnologías:",
    tecnologias: ["HTML", "CSS", "JavaScript", "VueJS", "Bootstrap"],
  },
  {
    title: "Diseño UX/UI",
    subTitle: "Tecnologías:",
    tecnologias: ["Figma", "InVision", "Webflow", "Gimp"],
  },
  {
    title: "Mantenimiento Web",
    subTitle: "¿Qué ofrecemos?",
    tecnologias: ["Renovación de Hosting.","Dominio perzonalizado.","Rapidez de carga para tu página web.","Cambios en tu página web."],
  },
];

//Modal
for (let i = 0; i < $viewMoreServices.length; i++) {
  $viewMoreServices[i].addEventListener("click", () => {
    $modal.classList.add("modal--show");
    $modalContainer.classList.add("modal-container--show");
    document.querySelector(".modal__title").textContent = services[i].title;
    document.querySelector(".modal__sub-title").textContent = services[i].subTitle;
    let listTech = "";
    services[i].tecnologias.forEach((tecnologia) => {
      listTech += //Html
      `
      <li class="modal__li">
        <h5 class="modal__tech"><span>✔️</span> ${tecnologia}</h5>
      </li>
      `;
    });
    modalList.innerHTML = listTech;
  });
}
const removeModal = () => {
  $modal.classList.remove("modal--show");
  setTimeout(() => $modalContainer.classList.remove("modal-container--show"),250);
};
$btnExitModal.addEventListener("click", removeModal);
$modalContainer.addEventListener("click", (e) =>
  e.target.classList.contains("modal-container") ? removeModal() : ""
);

//Contact
async function handleSubmit(event) {
  event.preventDefault();
  document.querySelector(".contact__window__span").classList.remove("active");
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "aplication/json",
    },
  });
  if (response.ok) {
    document.querySelector(".contact__window__span").classList.add("active");
    this.reset();
  }
}
$submitForm.addEventListener("submit", handleSubmit);
