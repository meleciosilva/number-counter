const increaseButton = document.querySelector('#increase');
const resetButton = document.querySelector('#reset');
const decreaseButton = document.querySelector('#decrease');
const value = document.querySelector('#value');

let count = 0;

increaseButton.addEventListener('click', (e) => {
    if (e.target) {
        count++;
    }
    value.textContent = count;
});

resetButton.addEventListener('click', (e) => {
    if (e.target) {
        count = 0;
    }
    value.textContent = count;
});

decreaseButton.addEventListener('click', (e) => {
    if (e.target) {
        count--;
    }
    value.textContent = count;
});