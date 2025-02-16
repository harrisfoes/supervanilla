console.log("hi");

const buttons = document.querySelectorAll(".calc-btn");
const display = document.querySelector(".calc-display");

buttons.forEach((e) => e.addEventListener("click", (e) => handleButton(e)));

function handleButton(e) {
  console.log(e.target.id);
  console.log(display);
  display.value = e.target.id;
  console.log("boo");
}
