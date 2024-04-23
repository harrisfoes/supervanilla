console.log("paken");

const div = document.getElementById("budols");
div.textContent = "BOLBOLON";

const rand = () => Math.random() >= 0.5;
console.log(rand());

if (rand()) {
  div.style.backgroundColor = "blue";
  div.textContent = "YES";
} else {
  div.style.backgroundColor = "red";
  div.textContent = "NO";
}
