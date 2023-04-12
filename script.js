let num1 = 0;
let num2 = 0;
let operator = "";

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
    return add(num1, num2);
}

const digits = document.querySelector('.digits');
const currentNum = document.querySelector('#currentNum');
for (let i = 1; i < 13; i++) {
    const btn = document.createElement('button');
    btn.setAttribute("id", `num${i}`);
    digits.appendChild(btn);
    btn.textContent = `${i}`;
    if (i === 12) {
        btn.setAttribute("id", "equals");
        btn.textContent = "=";
    } else if (i === 11) {
        btn.setAttribute("id", "dot");
        btn.textContent = ".";
    } else if (i === 10) {
        btn.setAttribute("id", "num0");
        btn.textContent = "0";
    }

    btn.addEventListener("click", () => {
        if (i < 10) {
            currentNum.textContent += `${i}`;
        } else if (i === 10) {
            currentNum.textContent += "0";
        } else if (i === 11) {
            if (currentNum.textContent !== "" && !currentNum.textContent.includes(".")) {
                currentNum.textContent += ".";
            }
        }
        //  else {
        //     operate(num1, num2);
        // }
        })
}

const clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    currentNum.textContent = "";
})

const del = document.querySelector('#delete');
del.addEventListener("click", () => {
    currentNum.textContent = currentNum.textContent.slice(0, currentNum.textContent.length - 1);
})