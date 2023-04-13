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
let tempEqual = true;

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

for (let i = 1; i < 12; i++) {
    const btn = document.createElement('button');
    btn.setAttribute("id", `num${i}`);
    digits.appendChild(btn);
    btn.textContent = `${i}`;
    if (i === 11) {
        btn.setAttribute("id", "dot");
        btn.textContent = ".";
    } else if (i === 10) {
        btn.setAttribute("id", "num0");
        btn.textContent = "0";
    }

    btn.addEventListener("click", () => {
        if (temp) {
            currentNum.textContent = "";
            temp = false;
        }
        if (i < 10) {
            currentNum.textContent += `${i}`;
        } else if (i === 10) {
            currentNum.textContent += "0";
        } else if (i === 11) {
            if (currentNum.textContent !== "" && !currentNum.textContent.includes(".")) {
                currentNum.textContent += ".";
            }
        } 
        
        if (temp) {
            currentNum.textContent = "";
            temp = false;
        }
        })
}

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


sum.addEventListener("click", () => {
    used.textContent = Number(currentNum.textContent) + " + ";
    temp = true;
    operator = " + ";
    tempEqual = true;
})

div.addEventListener("click", () => {
    used.textContent = Number(currentNum.textContent) + " \u00f7 ";
    temp = true;
    operator = " \u00f7 ";
    tempEqual = true;
})

mult.addEventListener("click", () => {
    used.textContent = Number(currentNum.textContent) + " * ";
    temp = true;
    operator = " * ";
    tempEqual = true;
})

sub.addEventListener("click", () => {
    used.textContent = Number(currentNum.textContent) + " - ";
    temp = true;
    operator = " - ";
    tempEqual = true;
})

clear.addEventListener("click", () => {
    currentNum.textContent = "";
    used.textContent = "";
})

del.addEventListener("click", () => {
    currentNum.textContent = currentNum.textContent.slice(0, currentNum.textContent.length - 1);
})