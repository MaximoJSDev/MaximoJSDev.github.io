const $btn = document.querySelectorAll(".nav__menu__a");
const $nav = document.querySelector(".nav");
const $audio = (document.getElementById("audio").volume = 0.03);
let oldBtn;

const $submit = document.querySelector(".contact__form");
const $btnMailTo = document.querySelector("#mailto");

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
  });
});

$submit.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get("name"));
  $btnMailTo.setAttribute(
    "href",
    `mailto:maximiliano06cm@gmail.com?subject=${form.get("name")}${form.get("email")}&body=${form.get("message")}`
  );
  $btnMailTo.click();
}
