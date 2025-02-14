export function setIndexLinks(selector = "a.index-link") {
  const links = document.querySelector(selector);
  links.href = "index.html";
  console.log("badabing");
}
