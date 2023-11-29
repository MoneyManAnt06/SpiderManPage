const images = [
  {
    img: "../../public/img1.jpg",
  },
  {
    img: "../../public/img2.jpg",
  },
  {
    img: "../../public/img3.jpg",
  },
  {
    img: "../../public/img4.jpeg",
  },
  {
    img: "../../public/marvelChar2.jpeg",
  },
  {
    img: "../../public/gallery1.jpg",
  },
  {
    img: "../../public/gallery2.jpg",
  },
  {
    img: "../../public/gallery3.jpg",
  },
  {
    img: "../../public/gallery4.jpeg",
  },
  {
    img: "../../public/gallery5.webp",
  },
  {
    img: "../../public/gallery6.webp",
  },
];

function getRandomInt1(max) {
  return Math.floor(Math.random() * max);
}
function getRandomInt2(max) {
  return Math.floor(Math.random() * max);
}
const random1 = getRandomInt1(images.length);
const random2 = getRandomInt2(images.length);

const imagen1 = images[random1].img;
const imagen2 = images[random2].img;

let actual1 = document.getElementById("first-img");
let actual2 = document.getElementById("second-img");

const image_element1 = document.createElement("img");
const image_element2 = document.createElement("img");

image_element1.classList.add("Banner-sides");
image_element2.classList.add("Banner-sides");

image_element1.setAttribute("src", imagen1);
image_element2.setAttribute("src", imagen2);

actual1.appendChild(image_element1);
actual2.appendChild(image_element2);
