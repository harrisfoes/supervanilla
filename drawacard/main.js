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

for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit, value });
  }
}

function popCard(deck) {
  //if deck is empty then return
  //splice a random card from the deck
  //return the removed card
  //remove the card from the deck
  console.log("pop the cards");
}

/*

TODO:
[ ] implement popcard
[ ] deck display
[ ] reset functionality
[ ] unit testing

*/

console.log(deck);
