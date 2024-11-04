const num = 56.5678;


// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart = Math.floor(num);// Math.floor ()- returns the largest integer <= (less or equal) to the input
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
const decimalPart = (num - wholeNumberPart).toFixed(4);// First, I need to substract the WholeNumberPart from the num, to get the decimals => num - WholeNumberPart
// the remainder is now 0.5677799999, 
//however the remainder doesn't show 0.5678, thus, I found on substack flow a function to use .toFixed(), in the parantheses i will put the number 4 to return 4 digits
console.log (decimalPart);

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
const roundedNum = Math.round(num);// Math.round() Returns the value of the input rounded to the nearest integer.
// Log your variables to the console to check your answers

console.log ()