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
const decimalButton = document.querySelector(".--calculator-button#decimal");

const enterButton = document.querySelector(".--calculator-button#enter");

let num1 = "0";
let num2 = "0";
let total = "0";
let temp = "0";
let currentOperator = null;

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
    total = newTotal.toString();

    // strip preceding zeros
    if (total[1] != ".") {
        startIndex = Array.from(total).findIndex((char) => char != "0");
        total = Array.from(total).slice(startIndex).join("");
    }
    displayText.innerText = total;
}

function disableChangeButtons() {
    for (operatorButton of operatorButtons) {
        operatorButton.setAttribute("disabled", "");
    }
    negativeButton.setAttribute("disabled", "");
    percentageButton.setAttribute("disabled", "");
    enterButton.setAttribute("disabled", "");
}

function enableChangeButtons() {
    for (operatorButton of operatorButtons) {
        operatorButton.removeAttribute("disabled");
    }
    negativeButton.removeAttribute("disabled");
    percentageButton.removeAttribute("disabled");
    enterButton.removeAttribute("disabled");
}

function disableDecimalButton() {
    decimalButton.setAttribute("disabled", "");
}

function enableDecimalButton() {
    decimalButton.removeAttribute("disabled");
}

// EVENT LISTENERS

for (numberButton of numberButtons) {
    numberButton.addEventListener("click", (event) => {
        setTotal(getTotal() + event.target.innerText);

        if (event.target.innerText == ".") {
            disableChangeButtons();
            disableDecimalButton();
        } else {
            enableChangeButtons();
        }
    });
}

for (operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", (event) => {
        num1 = getTotal();
        setTotal(clear());

        const operator = event.target.innerText;
        currentOperator = operator;

        enableDecimalButton();
    });
}

clearButton.addEventListener("click", (event) => {
    setTotal(clear());
    num1 = clear();
    num2 = clear();
    enableChangeButtons();
    enableDecimalButton();
});

negativeButton.addEventListener("click", (event) => {
    setTotal((+negative(parseFloat(total)).toFixed(6)).toString());
});

percentageButton.addEventListener("click", (event) => {
    setTotal((+percentage(parseFloat(total)).toFixed(6)).toString());
});

enterButton.addEventListener("click", (event) => {
    num2 = getTotal();
    if (currentOperator == null) {
        num1 = getTotal();
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
        case "x":
            operationFunction = multiply;
            break;
        case "/":
            operationFunction = divide;
            break;
        default:
            break;
    }

    setTotal(
        (+operationFunction(parseFloat(num1), parseFloat(num2)).toFixed(
            6
        )).toString()
    );

    console.log(num1, num2, getTotal());
});
