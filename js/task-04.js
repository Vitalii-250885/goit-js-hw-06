const counter = {
    counterValue: 0,

    increment () {
        this.counterValue += 1;
    },

    decrement () {
        this.counterValue -= 1;
    }
};


const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById('value');


incrementButton.addEventListener('click', () => {
    counter.increment ();
    valueRef.textContent = counter.counterValue;
});

decrementButton.addEventListener('click', () => {
    counter.decrement ();
    valueRef.textContent = counter.counterValue;
});
