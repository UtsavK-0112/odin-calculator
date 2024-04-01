const displayText = document.querySelector(".--display-text");

const calculatorButtons = document.querySelectorAll(".--calculator-button");
const numberButtons = document.querySelectorAll(".--calculator-button.number");
const operatorButtons = document.querySelectorAll(
    ".--calculator-button.operator"
);
const clearButton = document.querySelector(".--calculator-button#clear");
const negativeButton = document.querySelector(".--calculator-button#negative");
const percentageButton = document.querySelector(
    ".--calculator-button#percentage"
);

const enterButton = document.querySelector(".--calculator-button#enter");

let total = 0;
let temp1 = null;
let currentOperator = null;
let temp2 = null;

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

for (numberButton of numberButtons) {
    numberButton.addEventListener("click", (event) => {
        const number = parseInt(event.target.innerText);
        total;
        setTotal(getTotal() * 10 + number);
    });
}

console.log(operatorButtons);

for (operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", (event) => {
        temp1 = getTotal();
        setTotal(clear());

        const operator = event.target.innerText;
        currentOperator = operator;
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

enterButton.addEventListener("click", (event) => {
    temp2 = getTotal();

    if (currentOperator == null) {
        temp1 = getTotal();
        setTotal(clear());
        return;
    }

    let operationFunction;

    switch (currentOperator) {
        case "+":
            operationFunction = add;
            break;
        case "-":
            operationFunction = subtract;
            break;
        case "*":
            operationFunction = multiply;
            break;
        case "/":
            operationFunction = divide;
            break;
        default:
            break;
    }

    setTotal(operationFunction(temp1, temp2));
});
