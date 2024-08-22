console.log("bolbol");

let timesClicked = 0;

const divCounter = document.getElementById("counter");

const countNumber = document.getElementById("count-number");

const increaseBtn = document.getElementById("increase-button");

const resetBtn = document.getElementById("reset-button");

const decreaseBtn = document.getElementById("decrease-button");

console.log(timesClicked);

function increaseCounter() {
  timesClicked++;
  console.log("inc");
  console.log(timesClicked);
  countNumber.textContent = `You have clicked this window ${timesClicked} times`;
}

function decreaseCounter() {
  timesClicked--;
  console.log("dec");
  console.log(timesClicked);
  countNumber.textContent = `You have clicked this window ${timesClicked} times`;
}
function resetCounter() {
  timesClicked = 0;
  console.log("res");
  console.log(timesClicked);
  countNumber.textContent = `You have clicked this window ${timesClicked} times`;
}

increaseBtn.addEventListener("click", increaseCounter());
decreaseBtn.addEventListener("click", decreaseCounter());
resetBtn.addEventListener("click", resetCounter());
