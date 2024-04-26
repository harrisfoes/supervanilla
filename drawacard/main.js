console.log("draw a card");

/*
There's a deck of cards
A complete suite of cards
draw
shuffle
1,2,3,4,5,6,7,8,9,10,11,12,13
suite:
counter
*/

const suits = ["Heart", "Clubs", "Diamonds", "Spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let deck = [];
let popped = {};

const cardDrawnDisplay = document.getElementById("card");
const deckCount = document.getElementById("deck-count");

for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit, value });
  }
}
console.log(deck, "deck before");

function popCard(deck) {
  console.log("popcard called");
  let rand = Math.floor(Math.random() * deck.length);

  if (deck.length === 0) {
    return;
  }

  return deck.splice(rand, 1);
}

function handleClickDraw() {
  popped = popCard(deck);
  console.log(popped);
  console.log(deck, "deck after");
  cardDrawnDisplay.innerHTML = `<p>${popped[0].value}</p><p>${popped[0].suit}</p>`;
  deckCount.textContent = `${deck.length}/ 52`;
}

/*

TODO:
[x] implement popcard
[x] attach to button
[x] deck display
[ ] reset functionality
[ ] suit filter
[ ] unit testing

*/

document
  .querySelector("#draw-card")
  .addEventListener("click", () => handleClickDraw());
