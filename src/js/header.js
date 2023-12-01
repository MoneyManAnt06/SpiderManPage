function loadHeader() {
  fetch("/src/components/header.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("common-header").innerHTML = text));
}

document.addEventListener("DOMContentLoaded", function (event) {
  loadHeader();
});
