function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener('click', getHexColor);

function getHexColor(e) {
  if(e.target.nodeName !== "BUTTON") {
    return;
  }

  e.currentTarget.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
