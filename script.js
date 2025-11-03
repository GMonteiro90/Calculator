// basic calculator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
	if (num2 === 0) return "Why are you like this?";
	return num1 / num2;
};

// create 3 variables to store the numbers and operator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "";

// operate function

function operate(operator, number1, number2) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
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

// retrieve DOM elements

const digitsButton = document.querySelectorAll(".digit");
const operatorsButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const displayArea = document.querySelector(".display");
displayArea.textContent = "0";

// listeners

digitsButton.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		currentInput += e.target.textContent;
		displayArea.textContent = currentInput;
	});
});

operatorsButton.forEach((symbol) => {
	symbol.addEventListener("click", (e) => {
		const selectedOperator = e.target.textContent;

		if (firstNumber === "") {
			firstNumber = currentInput;
			operator = selectedOperator;
			currentInput = "";
		} else if (operator && currentInput) {
			secondNumber = currentInput;
			const result = operate(operator, firstNumber, secondNumber);
			displayArea.textContent = result;

			firstNumber = result;
			operator = selectedOperator;
			currentInput = "";
		} else {
			operator = selectedOperator;
		}
	});
});

equalsButton.addEventListener("click", (event) => {
	secondNumber = currentInput;

	if (firstNumber && secondNumber && operator) {
		const result = operate(operator, firstNumber, secondNumber);
		displayArea.textContent = result;
		firstNumber = result;
        currentInput = "";
        operator = "";
	}
});

clearButton.addEventListener("click", () => {
	firstNumber = "";
	secondNumber = "";
	operator = "";
	currentInput = "";
	displayArea.textContent = "0";
});

document.addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) {
    currentInput += e.key;
    displayArea.textContent = currentInput;

  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' ) {
    firstNumber = currentInput;
    operator = e.key;
    currentInput = '';

  } else if (e.key === 'Enter') {
    secondNumber = currentInput;
    const result = operate(operator, firstNumber, secondNumber);
    displayArea.textContent = result;

  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    displayArea.textContent = currentInput;

  } else if (e.key === 'Escape' || e.key === 'c') {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    currentInput = '';
    displayArea.textContent = '0';
  }
});
