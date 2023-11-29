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

function getRandomInt() {
  return Math.floor(Math.random() * images.length);
}

const random1 = getRandomInt();
const random2 = getRandomInt();

const image1 = images[random1].img;
const image2 = images[random2].img;

const side1 = document.getElementById("first-img");
const side2 = document.getElementById("second-img");

const image_element1 = document.createElement("img");
const image_element2 = document.createElement("img");

image_element1.classList.add("Banner-sides");
image_element2.classList.add("Banner-sides");

image_element1.setAttribute("src", image1);
image_element2.setAttribute("src", image2);

side1.appendChild(image_element1);
side2.appendChild(image_element2);
