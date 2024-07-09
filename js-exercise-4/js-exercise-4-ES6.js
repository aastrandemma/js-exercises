console.log("4. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).");
console.log("");

const calculateMultiplication = () => {
  clearResults();
  const num1 = getInputNum1();
  const num2 = getInputNum2();
  const result = calculateMultiplicationResult(num1, num2);
  displayResult("Multiplication Result", result);
};

const calculateDivision = () => {
  clearResults();
  const num1 = getInputNum1();
  const num2 = getInputNum2();
  if (num2 === 0) {
    displayResult("Division Result", "Cannot divide by zero");
  } else {
    const result = calculateDivisionResult(num1, num2);
    displayResult("Division Result", result);
  }
};

const getInputNum1 = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  return isNaN(num1) ? 0 : num1;
};

const getInputNum2 = () => {
  const num2 = parseFloat(document.getElementById("num2").value);
  return isNaN(num2) ? 0 : num2;
};

const calculateMultiplicationResult = (num1, num2) => num1 * num2;

const calculateDivisionResult = (num1, num2) => num1 / num2;

const displayResult = (heading, result) => {
  document.getElementById("result").textContent = heading;
  if (heading.includes("Multiplication")) {
    document.getElementById("multiplicationResult").textContent = result;
  } else {
    document.getElementById("divisionResult").textContent = result;
  }
};

const clearResults = () => {
  document.getElementById("multiplicationResult").textContent = "";
  document.getElementById("divisionResult").textContent = "";
  document.getElementById("result").textContent = "";
};