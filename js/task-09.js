function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};


refs.button.addEventListener('click', getHexColor);

function getHexColor(e) {
  if(e.target.nodeName !== "BUTTON") {
    return;
  }

  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.color.textContent = randomColor;
  console.log(randomColor);
}

