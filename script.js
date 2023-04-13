const used = document.querySelector('#usedNum');
const sum = document.querySelector('#add');
const currentNum = document.querySelector('#currentNum');
const digits = document.querySelector('.digits');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const equal = document.createElement('button');
const div = document.querySelector('#divide');
const mult = document.querySelector('#multiply');
const sub = document.querySelector('#subtract');

let num1 = 0;
let num2 = 0;
let operator = "";
let temp = false;
let tempEqual = false;
let tempOp = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2){
    if (operator === " + ") {
        return add(num1, num2);
    } else if (operator === " - ") {
        return subtract(num1, num2);
    } else if (operator === " * ") {
        return multiply(num1, num2)
    } else if (operator === " \u00f7 ") {
        return divide(num1, num2)
    }
}
function createButton(i) {
    const btn = document.createElement('button');
    btn.setAttribute("id", `num${i}`);
    digits.appendChild(btn);
    btn.textContent = `${i}`;
    btn.addEventListener("click", () => {
        if (temp) {
            currentNum.textContent = "";
            temp = false;
        }
        if (currentNum.textContent === "0") {
            currentNum.textContent = "";
        }
        currentNum.textContent += `${i}`;
        if (Number(currentNum.textContent) === 0) {
            currentNum.textContent = "0";
        }
        tempOp = true;
    })
}

for (let i = 7; i < 10; i++) {
    createButton(i);
}

for (let i = 4; i < 7; i++) {
    createButton(i);
}

for (let i = 1; i < 4; i++) {
    createButton(i);
}

createButton(0);

const dot = document.createElement('button');
digits.appendChild(dot);
dot.textContent = ".";
dot.addEventListener("click", () => {
    if (currentNum.textContent !== "" && !currentNum.textContent.includes(".")) {
        currentNum.textContent += ".";
    }
})

digits.appendChild(equal);
equal.textContent = "=";

equal.addEventListener("click", () => {
    if (tempEqual) {
        if (isNaN(currentNum.textContent)) {
            currentNum.textContent = "0";
        }
        used.textContent += currentNum.textContent + " = ";
        currentNum.textContent = operate(operator, parseFloat(used.textContent), parseFloat(currentNum.textContent));
        tempEqual = false;
    }
})

function calc() {
    if (tempOp && used.textContent !== "" && !used.textContent.includes("=")){
        currentNum.textContent = operate(operator, parseFloat(used.textContent), parseFloat(currentNum.textContent));
        tempOp = false;
    }
    temp = true;
    tempEqual = true;
    tempOp = false;
}
sum.addEventListener("click", () => {
    calc();
    operator = " + ";
    used.textContent = Number(currentNum.textContent) + " + ";
})

div.addEventListener("click", () => {
    calc();
    operator = " \u00f7 ";
    used.textContent = Number(currentNum.textContent) + " \u00f7 ";
})

mult.addEventListener("click", () => {
    calc();
    operator = " * ";
    used.textContent = Number(currentNum.textContent) + " * ";
})

sub.addEventListener("click", () => {
    calc();
    operator = " - ";
    used.textContent = Number(currentNum.textContent) + " - ";
})

clear.addEventListener("click", () => {
    currentNum.textContent = "";
    used.textContent = "";
    temp = false;
    tempEqual = false;
})

del.addEventListener("click", () => {
    currentNum.textContent = currentNum.textContent.slice(0, currentNum.textContent.length - 1);
})