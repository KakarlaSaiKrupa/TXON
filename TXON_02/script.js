let resultElement = document.getElementById('result');
let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

function clearScreen() {
    currentExpression = '';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = '';
        updateDisplay();
        alert('Invalid input!');
    }
}

function updateDisplay() {
    resultElement.value = currentExpression;
}
