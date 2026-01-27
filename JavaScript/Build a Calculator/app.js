function calculateSum(num1, num2) {
    return num1 + num2;
}

function calculateDifference(num1, num2) {
    return num1 - num2;
}

function calculateProduct(num1, num2) {
    return num1 * num2;
}

function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

function calculateSquare(num) {
    return num ** 2;
}

function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

// Button functions
function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateSum(num1, num2);
}

function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateDifference(num1, num2);
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateProduct(num1, num2);
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateQuotient(num1, num2);
}

function square() {
    let num1 = parseFloat(document.getElementById('num1').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateSquare(num1);
}

function squareRoot() {
    let num1 = parseFloat(document.getElementById('num1').value);
    document.getElementById('result').textContent = "Sonuç: " + calculateSquareRoot(num1);
}
