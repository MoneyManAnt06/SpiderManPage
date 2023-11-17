function loadBanner() {
  fetch("/src/components/banner.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementById("common-banner").innerHTML = text)
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
  loadBanner();
});
