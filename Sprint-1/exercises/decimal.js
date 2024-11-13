const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
var wholeNumberPart = (Math.trunc(num));
console.log(wholeNumberPart);


// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
var decimalPart = (num - Math.floor(num));
var decimalPart = num.toFixed(4);
console.log(decimalPart);


// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

var roundedNum = (Math.ceil(num));
console.log(roundedNum);


// Log your variables to the console to check your answers

