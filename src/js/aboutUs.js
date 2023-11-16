function loadAboutUs() {
  fetch("/src/components/aboutUs.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementById("common-aboutus").innerHTML = text)
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
  loadAboutUs();
});
