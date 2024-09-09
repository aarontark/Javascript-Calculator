let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal');
let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let equals = document.querySelector('.equals');
let clearBtn = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');

let operands = [''];
let operator;
let calculated;

numbers.forEach((currentNum) => {
    currentNum.addEventListener('click', () => {
        if (calculated == true && operator == false) {
            operands = [''];
            calculated = false;
        }
        if(operands.length == 1) {
            operands[0] = Number(operands[0] + currentNum.innerHTML);
            display.innerHTML = operands[0];
            console.log(operands);
        } else if (operands.length == 2) {
            operands[operands.length - 1] = Number(operands[operands.length - 1] + currentNum.innerHTML);
            display.innerHTML = operands[operands.length - 1];
            console.log(operands);
        }
    })
})

decimal.addEventListener('click', () => {
    if(operands.length == 1) {
        operands[0] = operands[0] + decimal.innerHTML;
        display.innerHTML = operands[0];
        console.log(operands);
    } else if (operands.length == 2) {
        operands[operands.length - 1] = operands[operands.length - 1] + decimal.innerHTML;
        display.innerHTML = operands[operands.length - 1];
        console.log(operands);
    }
})


addition.addEventListener('click', () => {
    if(operator != '+' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '+';
    if(operands.length == 1) {
        operands.push('');
    } else {
        let operand1 = Number(operands[0]);
        let operand2 = Number(operands[1]);
        let sum = operand1 + operand2;
        operands.shift();
        operands.shift();
        operands.push(sum);
        operands.push('');
        display.innerHTML = sum;
    }
})

subtraction.addEventListener('click', () => {
    if(operator != '-' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '-';
    if(operands.length == 1) {
        operands.push('');
    } else {
        let operand1 = Number(operands[0]);
        let operand2 = Number(operands[1]);
        let difference = operand1 - operand2;
        operands.shift();
        operands.shift();
        operands.push(difference);
        operands.push('');
        display.innerHTML = difference;
    }
})

multiplication.addEventListener('click', () => {
    if(operator != '*' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '*';
    if(operands.length == 1) {
        operands.push('');
    } else {
        let operand1 = Number(operands[0]);
        let operand2 = Number(operands[1]);
        let product = operand1 * operand2;
        operands.shift();
        operands.shift();
        operands.push(product);
        operands.push('');
        display.innerHTML = product;
    }
})


division.addEventListener('click', () => {
    if(operator != '/' && operands.length > 1) {
        operatorSwitch();
    }
    operator = '/';
    if(operands.length == 1) {
        operands.push('');
    } else {
        let operand1 = Number(operands[0]);
        let operand2 = Number(operands[1]);
        let quotient = operand1 / operand2;
        operands.shift();
        operands.shift();
        operands.push(quotient);
        operands.push('');
        display.innerHTML = quotient;
    }
})

backspace.addEventListener('click', () => {
    operands[operands.length - 1] = Math.floor(operands[operands.length - 1] / 10);
    display.innerHTML = operands[operands.length - 1];
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
    } else if (operator == '*') {
        let product = Number(operands[0]) * Number(operands[1]);
        display.innerHTML = product;
        operands = [product, ''];
    } else if (operator == '/') {
        let quotient = Number(operands[0]) / Number(operands[1]);
        display.innerHTML = quotient;
        operands = [quotient, ''];
    }
    operator = '';
    calculated = true;
    console.log(operands);
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = '0';
    operands = [''];
    operator = '';
})

function operatorSwitch() {
    switch (operator) {
        case "+":
            operands = [operands[0] + operands[1]];
            break;
        case '-':
            operands = [operands[0] - operands[1]];
            break;
        case '*':
            operands = [operands[0] * operands[1]];
            break;
        case '/':
            operands = [operands[0] / operands[1]];
            break;
    }
}