let oldBtn;
const $nav = document.querySelector(".nav");
const $btnResponsive = document.querySelector(".btn-responsive");
const $menu = document.querySelector(".nav__menu");
const $viewMore = document.querySelectorAll(".services__information__view-more");
const backModal = document.querySelector(".bakckground-modal");
const $modal = document.querySelector(".modal");
const $btnModal = document.querySelector(".modal__btn");
const $submit = document.querySelector(".contact__form");
window.addEventListener("scroll", function () {
  $nav.classList.toggle("sticky", window.scrollY > 1);
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
  item.addEventListener("click", () => {
    backModal.classList.add("back-modal-active");
    $modal.classList.add("active-modal");
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
      "Accept": "aplication/json",
    },
  });
  if (response.ok) {
    const contactWindow = document.querySelector(".contact__window").classList.add("active");
    this.reset();
  }
}
