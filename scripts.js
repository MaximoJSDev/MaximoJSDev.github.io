let oldBtn;
const $nav = document.querySelector(".nav");
const $btnResponsive = document.querySelector(".btn-responsive");
const $menu = document.querySelector(".nav__menu");
const $btnNav = document.querySelectorAll(".nav__menu__a");
const $viewMore = document.querySelectorAll(".services__information__view-more");
const backModal = document.querySelector(".bakckground-modal");
const $modal = document.querySelector(".modal");
const $btnModal = document.querySelector(".modal__btn");
const $submit = document.querySelector(".contact__form");
const $btnMailTo = document.getElementById("mailto");
window.addEventListener("scroll", function () {
  $nav.classList.toggle("sticky", window.scrollY > 1);
});
$btnNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    if (oldBtn !== undefined) {
      oldBtn.classList.remove("active");
    }
    oldBtn = btn;
    $menu.classList.remove("menuResponsive");
  });
});
$btnResponsive.addEventListener("click", () => {
  $menu.classList.toggle("menuResponsive");
});

$viewMore.forEach((item) => {
  item.addEventListener("click", () => {
    $modal.classList.add("active-modal");
    backModal.classList.add("back-modal-active");
  });
  $btnModal.addEventListener("click", () => {
    $modal.classList.remove("active-modal");
    backModal.classList.remove("back-modal-active");
  });
  backModal.addEventListener("click", () => {
    $modal.classList.remove("active-modal");
    backModal.classList.remove("back-modal-active");
  });
});

$submit.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $btnMailTo.setAttribute(
    "href",
    `mailto:maximilianocm06@gmail.com?subject=${form.get("name")} - ${form.get(
      "email"
    )}&body=${form.get("message")}`
  );
  $btnMailTo.click();
  inputName = document.getElementById("name").value = "";
  inputEmail = document.getElementById("email").value = "";
  inputMessage = document.getElementById("message").value = "";
} 
