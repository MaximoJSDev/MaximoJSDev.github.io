let oldBtn;const $nav=document.querySelector(".nav");const $btnResponsive=document.querySelector(".btn-responsive");const $menu=document.querySelector(".nav__menu");const $viewMore=document.querySelectorAll(".services__information__view-more");const backModal=document.querySelector(".bakckground-modal");const $modal=document.querySelector(".modal");const $modalTitle=document.querySelector(".modal__title");const $btnModal=document.querySelector(".modal__btn");const $submit=document.querySelector(".contact__form")
window.addEventListener("scroll", function () {
  $nav.classList.toggle("sticky", window.scrollY > 10);
});
$btnResponsive.addEventListener("click", () =>
  $menu.classList.toggle("menuResponsive")
);
$menu.addEventListener("click", (e) => {
  if (e.target && e.target.className == "nav__menu__a") {
    e.target.classList.add("active");
    if (oldBtn !== undefined) {
      oldBtn.classList.remove("active");
    }
    oldBtn = e.target;
    $menu.classList.remove("menuResponsive");
  }
});
$viewMore.forEach((item) => {
  item.addEventListener("click", (e) => {
    const $technologies = document.querySelectorAll(".modal__tec");
    const $subTitle = document.querySelector(".modal__sub-title");
    backModal.classList.add("back-modal-active");
    $modal.classList.add("active-modal");
    if (e.target.classList.contains("frontend")) {
      $modalTitle.textContent = "Desarrollo Frontend";
      $subTitle.textContent = "Tecnologías:";
      $technologies[0].innerHTML = "<span>✔️</span> HTML";
      $technologies[1].innerHTML = "<span>✔️</span> CSS";
      $technologies[2].innerHTML = "<span>✔️</span> JavaScript";
      $technologies[3].innerHTML = "<span>✔️</span> VueJS";
      $technologies[4].innerHTML = "<span>✔️</span> Bootstrap";
    } else if (e.target.classList.contains("design")) {
      $modalTitle.textContent = "Diseño UX/UI";
      $subTitle.textContent = "Tecnologías:";
      $technologies[0].innerHTML = "<span>✔️</span> Figma";
      $technologies[1].innerHTML = "<span>✔️</span> InVision";
      $technologies[2].innerHTML = "<span>✔️</span> Webflow";
      $technologies[3].innerHTML = "<span>✔️</span> Gimp";
      $technologies[4].textContent = "";
    } else if (e.target.classList.contains("maintenance")) {
      $modalTitle.textContent = "Mantenimiento Web";
      $subTitle.textContent = "¿Qué ofrecemos?";
      $technologies[0].innerHTML = "<span>✔️</span> Renovación de Hosting";
      $technologies[1].innerHTML = "<span>✔️</span> Rapidez de carga en la página web";
      $technologies[2].innerHTML = "<span>✔️</span> Corrección de errores";
      $technologies[3].innerHTML = "<span>✔️</span> Cambios en la página web";
      $technologies[4].textContent = "";
    }
  });
});
backModal.addEventListener("click", (e) => {
  if (e.target == backModal) removeModal();
});
$btnModal.addEventListener("click", () => removeModal());
const removeModal = () => {
  $modal.classList.remove("active-modal");
  setTimeout(() => backModal.classList.remove("back-modal-active"), 280);
};
$submit.addEventListener("submit", handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "aplication/json",
    },
  });
  if (response.ok) {
    const contactWindow = document
      .querySelector(".contact__window__span")
      .classList.add("active");
    this.reset();
  }
}
