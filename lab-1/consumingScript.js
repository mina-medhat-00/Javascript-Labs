// a-the function created in function script works here
printVariables(1, 2, 3);

// c-called the function printed the returned value
console.log(printVariables(4, 5, 6));

// d-using 2 parameters returns the third parameter as undefined [3,5,undefined]
console.log(printVariables(3, 5));

// e-the function works but returns the first 3 parameters only
console.log(printVariables(100, 200, 300, 400));
