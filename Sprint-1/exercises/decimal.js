const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart = Math.floor(num);

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
const decimalPart = (num - wholeNumberPart).toFixed(4);

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
const roundedNum = Math.round(num);

// Log your variables to the console to check your answers
console.log("Whole Number Part:", wholeNumberPart);
console.log("Decimal Part:", decimalPart);
console.log("Rounded Number:", roundedNum);
