// Assignment 1

// Problem 1
// f-calling localvar and testvar before calling the function results in error of both variables not defined (out of scope)
console.log(localVar);
console.log(testingVar);

// b-function called before definition line works with no errors, because of hoisting
printVariables(1, 2, 3);

function printVariables(value1, value2, value3) {
  // d-add conditions to prevent undefined parameters
  if (isNaN(value1)) {
    value1 = 0;
  }
  if (isNaN(value2)) {
    value2 = 0;
  }
  if (isNaN(value3)) {
    value3 = 0;
  }
  // e-print all parameters
  console.log(arguments);

  var localVar = 3;
  var testingVar = 5;

  return [value1, value2, value3];
}

// g-calling localvar and testvar after calling the function, still results in undefined (out of scope)
printVariables(3, 4, 5);
console.log(localVar);
console.log(testingVar);

// Problem 2
const printVariables2 = (value1, value2, value3) => [value1, value2, value3];

// Assignment 2

function addNums(num1 = 0, num2 = 0) {
  // a-use default parameters to solve having less than 2 inputs
  // b-if input is not a number
  if (typeof num1 !== "number") {
    if (isNaN(Number(num1))) {
      num1 = 0;
    } else {
      num1 = Number(num1);
    }
  }
  if (typeof num2 !== "number") {
    if (isNaN(Number(num2))) {
      num2 = 0;
    } else {
      num2 = Number(num2);
    }
  }
  return num1 + num2;
}
