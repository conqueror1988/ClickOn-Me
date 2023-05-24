const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector(".body");
// const h1 = document.querySelector("h1");

// h1.style.fontSize = "3rem";

const colorsArray = ["red", "green", "yellow", "pink", "purple"];

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colorsArray.length);
  console.log(randomNumber);
  body.style.backgroundColor = colorsArray[randomNumber];
  color.innerHTML = colorsArray[randomNumber];
});
