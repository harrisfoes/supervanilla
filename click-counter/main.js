console.log("bolbol");

let timesClicked = 0;

const divCounter = document.getElementById("counter");

const countNumber = document.getElementById("count-number");

const btn = document.getElementById("button");

btn.addEventListener("click", clickCounter());

console.log(countNumber);

function clickCounter() {
  countNumber.textContent = `You have clicked this window ${timesClicked} times`;
  timesClicked++;
}
