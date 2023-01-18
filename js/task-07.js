const refs = {
    text: document.getElementById('text'),
    fontSizeControl: document.getElementById('font-size-control'),
};

console.dir(refs.fontSizeControl);
refs.fontSizeControl.addEventListener('change', () => {
    console.log(refs.fontSizeControl.ariaLabel)
});

function fontSizeControl() {

}

