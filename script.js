const used = document.querySelector('#usedNum');
const sum = document.querySelector('#sum');
const currentNum = document.querySelector('#currentNum');
const digits = document.querySelector('.digits');

let num1 = 0;
let num2 = 0;
let operator = "";
let temp = false;

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
        //  else {
        //     operate(num1, num2);
        // }
        
        if (temp) {
            currentNum.textContent = "";
            temp = false;
        }
        })
}


sum.addEventListener("click", () => {
    temp = Number(currentNum.textContent);
    used.textContent = temp + " + ";
    temp = true;
})

const clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    currentNum.textContent = "";
    used.textContent = "";
})

const del = document.querySelector('#delete');
del.addEventListener("click", () => {
    currentNum.textContent = currentNum.textContent.slice(0, currentNum.textContent.length - 1);
})