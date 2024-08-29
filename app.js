let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal');
let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let equals = document.querySelector('.equals');
let clearBtn = document.querySelector('.clear');

let operands = [''];
let operator;

numbers.forEach((currentNum) => {
    currentNum.addEventListener('click', () => {
        if(operands.length == 1) {
            operands[0] = Number(operands[0] + currentNum.innerHTML);
            console.log(operands);
            display.innerHTML = operands[0];
        } else if (operands.length == 2) {
            operands[operands.length - 1] = Number(operands[operands.length - 1] + currentNum.innerHTML);
            console.log(operands);
            display.innerHTML = operands[operands.length - 1];
        }
    })
})

addition.addEventListener('click', () => {
    operator = '+';
    if(operands.length == 1) {
        operands.push('');
    } else {
        let operand1 = Number(operands[0])
        let operand2 = Number(operands[1])
        let sum = operand1 + operand2;
        operands.shift();
        operands.shift();
        operands.push(sum);
        operands.push('');
    }
})

equals.addEventListener('click', () => {
    if(operator === '+') {
        let sum = Number(operands[0]) + Number(operands[1]);
        display.innerHTML = sum;
        operands = [sum];
    }
})