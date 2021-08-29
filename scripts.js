let oldBtn;
const $nav = document.querySelector(".nav");
const $btnResponsive = document.querySelector(".btn-responsive");
const $menu = document.querySelector(".nav__menu");
const $btn = document.querySelectorAll(".nav__menu__a");
const $viewMore = document.querySelectorAll(".services__information__view-more")
const $submit = document.querySelector(".contact__form");
const $btnMailTo = document.getElementById("mailto");
window.addEventListener("scroll", function () {
  $nav.classList.toggle("sticky", window.scrollY > 1);
});
$btn.forEach((btn) => {
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

$viewMore.forEach(item => {
  item.addEventListener("click", () => {
    Swal.fire({
      icon: "question",
      title: 'Tecnologías',
      html: //html 
      `
      <h6 class="technologies">✅ HTML</h6>
      <h6 class="technologies">✅ CSS</h6>
      <h6 class="technologies">✅ JavaScript</h6>
      <h6 class="technologies">✅ Vue</h6>
      <h6 class="technologies">✅ Bootstrap</h6>
      <h6 class="technologies">✅ WordPress</h6>
      <h6 class="technologies">✅ Figma</h6>
      `,
      padding: "1.2rem",
      background: "#fff",
      confirmButtonColor: "#3d5af1",
      customClass: {
        title: 'title-alert',
        confirmButton: 'confirm-btn',
      }
    })
})
})

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
        inputName = document.getElementById('name').value = ""
        inputEmail = document.getElementById('email').value = ""
        inputMessage = document.getElementById('message').value = ""
}
