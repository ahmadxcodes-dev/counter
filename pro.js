let count = 0;

const counterValue = document.querySelector(".counter__value");
const increaseBtn = document.querySelector(".counter__button--increase");
const decreaseBtn = document.querySelector(".counter__button--decrease");
const resetBtn = document.querySelector(".counter__reset-button");

// PLUS
increaseBtn.addEventListener("click", function () {
    if (count < 10) {
        count++;
        counterValue.textContent = count;
    }
});

// MINUS
decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    }
});

// RESET
resetBtn.addEventListener("click", function () {
    count = 0;
    counterValue.textContent = count;
});