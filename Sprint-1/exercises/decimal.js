const num = 56.5678;
console.log(num);
// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
const WHOLE_NUM_PART = Math.floor(num);
console.log("wHole number is:"+ WHOLE_NUM_PART);
const DECIMAL_PART = (num - WHOLE_NUM_PART).toFixed(4);
console.log("decimal part is:"+ DECIMAL_PART);
const ROUNDED_NUM = Math.round(num);
console.log("rounded number is:"+ ROUNDED_NUM);