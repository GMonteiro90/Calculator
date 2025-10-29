// basic calculator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// create 3 variables to store the numbers and operator
let firstNumber = "";
let secondNumber = "";
let operator = "";

// operate function

function operate(operator, number1, number2) {
	if (operator === "+") {
		return add(number1, number2);
	} else if (operator === "-") {
		return subtract(number1, number2);
	} else if (operator === "*") {
		return multiply(number1, number2);
	} else {
		return divide(number1, number2);
	}
}
