const $navbar = document.getElementById("navbar");
const $navHamburger = document.querySelector(".btn-responsive");
const $navList = document.querySelector(".nav__menu");
const $servicesViewMore = document.querySelectorAll(".services__section__view-more");
const $modalContainer = document.querySelector(".modal-container");
const $modal = document.querySelector(".modal");
const $modalTitle = document.querySelector(".modal__title");
const $modalSubtitle = document.querySelector(".modal__sub-title");
const $modalList = document.querySelector(".modal__lista");
const $modalBtnExit = document.querySelector(".modal__btn");
const $formSubmit = document.querySelector(".contact__form");
const $alertForm = document.querySelector(".contact__window__span");

// Navbar
window.addEventListener("scroll", () =>
  $navbar.classList.toggle("sticky", window.scrollY > 10)
);
$navHamburger.addEventListener("click", () =>
  $navList.classList.toggle("menuResponsive")
);
$navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__menu__a")) {
    document
      .querySelectorAll(".nav__menu__a")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    $navList.classList.remove("menuResponsive");
  }
});

// Services
const servicesList = [
  {
    title: "Desarrollo Frontend",
    subTitle: "¿Qué ofrezco?",
    services: [
      "Adaptación al diseño entregado",
      "Página multi plataforma",
      "Alta velocidad de carga",
      "Web totalmente responsiva",
    ],
  },
  {
    title: "Diseño UX/UI",
    subTitle: "¿Qué ofrezco?",
    services: [
      "Creación de Interfaces",
      "Experiencia de usuario intuitiva",
      "Elementos interactivos",
      "Diseño atractivo",
    ],
  },
  {
    title: "Mantenimiento Web",
    subTitle: "¿Qué ofrezco?",
    services: [
      "Mantenimiento técnico",
      "Renovación de Hosting",
      "Dominio personalizado",
      "Posicionamiento SEO",
    ],
  },
];

// Modal
$servicesViewMore.forEach((viewMore, i) => {
  viewMore.addEventListener("click", () => addModal(i));
});
const addModal = (i) => {
  $modalContainer.classList.add("modal-container--show");
  $modal.classList.add("modal--show");
  $modalTitle.textContent = servicesList[i].title;
  $modalSubtitle.textContent = servicesList[i].subTitle;
  let listTech = "";
  servicesList[i].services.forEach((tecnologia) => {
    listTech += //Html
    `
    <li class="modal__li">
      <h5 class="modal__tech"><span>✔️</span> ${tecnologia}</h5>
    </li>
    `;
  });
  $modalList.innerHTML = listTech;
};
const removeModal = () => {
  $modal.classList.remove("modal--show");
  setTimeout(
    () => $modalContainer.classList.remove("modal-container--show"),
    250
  );
};
$modalBtnExit.addEventListener("click", removeModal);
$modalContainer.addEventListener("click", (e) =>
  e.target.classList.contains("modal-container") ? removeModal() : ""
);

// Contact
async function handleSubmit(event) {
  event.preventDefault();
  const { name, email, message } = event.target;
  console.log(name, email, message);
  $alertForm.classList.remove("active");
  const form = new FormData(this);
  if (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    message.value.trim() !== ""
  ) {
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: { Accept: "aplication/json" },
    });
    if (response.ok) {
      callAlertForm("Correo enviado con exito!");
      this.reset();
    } else callAlertForm("Por favor rellene los campos correctamente");
  } else callAlertForm("Por favor rellene los campos correctamente");
}
$formSubmit.addEventListener("submit", handleSubmit);

const callAlertForm = (msg) => {
  $alertForm.textContent = msg;
  $alertForm.classList.add("active");
};
