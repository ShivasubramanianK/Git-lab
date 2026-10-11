let display = document.getElementById('display');
let expression = '';

// Append number to the display
function appendNumber(num) {
    if (num === '.' && expression.includes('.')) {
        return; // Prevent multiple decimal points
    }
    expression += num;
    updateDisplay();
}

// Append operator to the expression
function appendOperator(op) {
    if (expression === '') {
        return; // Don't allow operator as first input
    }
    if (['+', '-', '*', '/'].includes(expression.charAt(expression.length - 1))) {
        return; // Prevent consecutive operators
    }
    expression += op;
    updateDisplay();
}

// Delete last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    expression = '';
    updateDisplay();
}

// Calculate the result
function calculate() {
    if (expression === '') {
        return;
    }
    try {
        // Use Function constructor for safe evaluation
        let result = Function('"use strict"; return (' + expression + ')')();
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
        setTimeout(() => updateDisplay(), 1500);
    }
}

// Update display
function updateDisplay() {
    display.value = expression || '0';
}

// Initialize display
updateDisplay();