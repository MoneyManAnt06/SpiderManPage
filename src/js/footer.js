function loadFooter() {
  fetch("/src/components/footer.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementById("common-footer").innerHTML = text)
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
  loadFooter();
});
