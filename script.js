const displayText = document.querySelector(".--display-text");

const calculatorButtons = document.querySelectorAll(".--calculator-button");
const numberButtons = document.querySelectorAll(".--calculator-button.number");
const clearButton = document.querySelector(".--calculator-button#clear");
const negativeButton = document.querySelector(".--calculator-button#negative");
const percentageButton = document.querySelector(
    ".--calculator-button#percentage"
);

let total = 0;

// OPERATIONS

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// SIMPLE OPERATIONS

function percentage(a) {
    return a * 0.01;
}

function negative(a) {
    return -a;
}

function clear() {
    return 0;
}

// FUNCTIONS
function getTotal() {
    return total;
}

function setTotal(newTotal) {
    total = newTotal;
    displayText.innerText = total;
}

// EVENT LISTENERS
console.log(numberButtons);
for (numberButton of numberButtons) {
    numberButton.addEventListener("click", (event) => {
        const number = parseInt(event.target.innerText);
        total;
        setTotal(getTotal() * 10 + number);
    });
}

clearButton.addEventListener("click", (event) => {
    setTotal(clear());
});

negativeButton.addEventListener("click", (event) => {
    setTotal(negative(getTotal()));
});

percentageButton.addEventListener("click", (event) => {
    setTotal(percentage(getTotal()));
});
