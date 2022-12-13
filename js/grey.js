const colors = ["#f1f1f1", "#d3d3d3", "#bdbdbd", "#9e9e9e", "#7d7d7d", "#696969", "#323232", 
    "#171717", "#948a8a", "#757373", "#1d1b1b", "#414040", "#2b2929", "#0f0f0f", "#000000"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
