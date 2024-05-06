/*
There's a deck of cards
A complete suite of cards
draw
shuffle
1,2,3,4,5,6,7,8,9,10,11,12,13
suite:
counter
*/

const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
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
let selectedSuits = [];

const cardDrawnDisplay = document.getElementById("card");
const deckCount = document.getElementById("deck-count");

const checkbox = document.querySelectorAll(".checkbox");
const text = document.getElementById("text");

const drawButton = document.querySelector("#draw-card");
const resetButton = document.querySelector("#reset");

console.log(checkbox);

//checking the state for selected suits
for (let i = 0; i < checkbox.length; i++) {
  console.log(checkbox[i]);
  checkbox[i].addEventListener("change", () => {
    if (checkbox[i].checked) {
      console.log(checkbox[i]);
      selectedSuits.push(checkbox[i].id);
    } else {
      selectedSuits.pop(checkbox[i].id);
    }
    text.innerHTML = selectedSuits;
  });
}

function createDeck() {
  let newDeck = [];
  for (let suit of suits) {
    for (let value of values) {
      newDeck.push({ suit, value });
    }
  }

  return newDeck;
}

function popCard(deck, suitFilter) {
  console.log("popcard called");
  //we will only filter cards that are in the deck where suits:on the filter
  const filteredDeck = deck.filter((items) => {
    console.log(items.suit.toLowerCase());
    console.log(suitFilter);
    return suitFilter.includes(items.suit.toLowerCase());
  });

  console.log(filteredDeck);

  const rand = Math.floor(Math.random() * filteredDeck.length);

  if (deck.length === 0 || filteredDeck.length === 0) {
    return;
  }

  console.log(rand);
  console.log(filteredDeck[rand]);

  //find what the index is of this on the overall deck
  const convertedRand = findMatchingIndex(deck, filteredDeck[rand]);

  return deck.splice(convertedRand, 1);
}

function findMatchingIndex(deck, value) {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === value) {
      return i;
    }
  }
  return -1; // No matching value found
}

function handleClickDraw() {
  popped = popCard(deck, selectedSuits);

  if (!popped) {
    if (selectedSuits.length < 1) {
      alert("Please select suits to choose from");
    } else if (selectedSuits.length > 0 && deck.length > 1) {
      alert("No more cards for current suit selection");
    } else if (deck.length === 0) {
      alert("Deck is empty");
    }
  }

  console.log(popped);
  console.log(deck, "deck after");
  cardDrawnDisplay.innerHTML = `<p>${popped[0].value}</p><p>${popped[0].suit}</p>`;
  updateDeckCount();
}

function updateDeckCount() {
  deckCount.textContent = `${deck.length}/ 52`;
}

function resetDeck() {
  cardDrawnDisplay.innerHTML = "";
  deck = createDeck();
  updateDeckCount();
}

//logic start

deck = createDeck();

drawButton.addEventListener("click", () => handleClickDraw());
resetButton.addEventListener("click", () => resetDeck());

/*

TODO:
[x] implement popcard
[x] attach to button
[x] deck display
[x] reset functionality
[ ] suit filter
  [x] create suit checkbox
  [x] filter functioning well
[x] unit testing
[ ] polishing
*/
