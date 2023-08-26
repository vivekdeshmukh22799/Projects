let currentInput = '';
let currentOperator = '';
let previousInput = '';

//methods in javascript is called function
function appendNumber(number) {
    currentInput += number;
    updatedisplay();
}

//method to add operator nothing but appendOperator
function appendOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result = 0;

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updatedisplay();

}

//method to clear result
function ClearResult() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updatedisplay();
}

//method to update display
function updatedisplay() {
    document.getElementById('result').value = currentInput;
}

