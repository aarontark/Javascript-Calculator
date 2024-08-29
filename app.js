let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal');
let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let equals = document.querySelector('.equals');
let clearBtn = document.querySelector('.clear');

let operands = [''];

numbers.forEach((currentNum) => {
    currentNum.addEventListener('click', () => {
        operands[operands.length - 1] = Number(operands[operands.length - 1] + currentNum.innerHTML);
        console.log(operands);
        display.innerHTML = operands[operands.length - 1];
    })
})

addition.addEventListener('click', () => {
    if (operands.length == 1) {
        operands.push('');
    } else if (operands.length > 1) {
        let operand1 = Number(operands[operands.length - 2]);
        let operand2 = Number(operands[operands.length - 1]);
        let sum = operand1 + operand2;
        operands.push(sum);
        operands.push('')
        operands.shift();
        operands.shift();
        console.log(operands);
    }
})

subtraction.addEventListener('click', () => {
    if (operands.length == 1) {
        operands.push('');
    } else if (operands.length > 1) {
        let operand1 = Number(operands[operands.length - 2]);
        let operand2 = Number(operands[operands.length - 1]);
        let diff = operand1 - operand2;
        operands.push(diff);
        operands.push('')
        operands.shift();
        operands.shift();
        console.log(operands);
    }
})

equals.addEventListener('click', () => {
    display.innerHTML = operands[0];
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = 0;
    operands = ['']
})