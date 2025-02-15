const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The future depends on what you do today. – Mahatma Gandhi",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Act as if what you do makes a difference. It does. – William James",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Everything you've ever wanted is on the other side of fear. – George Addair",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
];

const quoteBox = document.querySelector(".quote");
const quoteButton = document.querySelector(".quote-btn");
let quoteSelected = "";

console.log(quoteBox);

quoteButton.addEventListener("click", () => {
  getRandomQuote();
});

getRandomQuote();

function getRandomQuote() {
  const quotePicked = Math.floor(Math.random() * quotes.length);

  if (quotePicked === quoteSelected) {
    getRandomQuote();
    return;
  }

  quoteSelected = quotePicked;
  quoteBox.innerText = quotes[quotePicked];
}
