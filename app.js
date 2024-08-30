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
            display.innerHTML = operands[0];
        } else if (operands.length == 2) {
            operands[operands.length - 1] = Number(operands[operands.length - 1] + currentNum.innerHTML);
            display.innerHTML = operands[operands.length - 1];
        }
    })
})

addition.addEventListener('click', () => {
    if(operator != '+' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '+';
    if(operands.length == 1) {
        console.log('operands plus length 1')
        operands.push('');
        console.log(operands)
    } else {
        console.log('operands plus length 2')
        let operand1 = Number(operands[0])
        let operand2 = Number(operands[1])
        let sum = operand1 + operand2;
        operands.shift();
        operands.shift();
        operands.push(sum);
        operands.push('');
        console.log(operands);
    }
})

subtraction.addEventListener('click', () => {
    if(operator != '-' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '-';
    if(operands.length == 1) {
        console.log('operands minus length 1');
        operands.push('');
        console.log(operands);
    } else {
        console.log('operands minus length 2');
        let operand1 = Number(operands[0])
        let operand2 = Number(operands[1])
        let difference = operand1 - operand2;
        operands.shift();
        operands.shift();
        operands.push(difference);
        operands.push('');
        console.log(operands);
    }
})

equals.addEventListener('click', () => {
    if(operator === '+') {
        let sum = Number(operands[0]) + Number(operands[1]);
        display.innerHTML = sum;
        operands = [sum, ''];
    } else if (operator == '-') {
        let difference = Number(operands[0]) - Number(operands[1]);
        display.innerHTML = difference;
        operands = [difference, ''];
    }
})

function operatorSwitch() {
    switch (operator) {
        case "+":
            console.log('switch');
            console.log(operands);
            operands = [operands[0] + operands[1]];
            break;
        case '-':
            console.log('switch');
            console.log(operands);
            operands = [operands[0] - operands[1]];
            break;
    }
}