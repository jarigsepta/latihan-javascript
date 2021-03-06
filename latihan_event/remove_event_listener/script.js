const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  if (toggle) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "yellow";
  }

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", function () {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
