console.log("haha");

const quotes = [
  "hey guurl",
  "you gotta thang",
  "when you come home?",
  "What's your number",
];

const quoteBox = document.querySelector(".quote");
const quoteButton = document.querySelector(".quote-btn");

console.log(quoteBox);

quoteButton.addEventListener("click", () => {
  getRandomQuote();
});

getRandomQuote();

function getRandomQuote() {
  const quotePicked = Math.floor(Math.random() * quotes.length);
  quoteBox.innerText = quotes[quotePicked];
}
