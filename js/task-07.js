const refs = {
    fontSizeControl: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
};

refs.fontSizeControl.setAttribute("value", refs.fontSizeControl.getAttribute("min"));
refs.fontSizeControl.addEventListener('input', fontSizeController);

function fontSizeController(e) {
    refs.text.style.fontSize = `${e.target.value}px`;
}