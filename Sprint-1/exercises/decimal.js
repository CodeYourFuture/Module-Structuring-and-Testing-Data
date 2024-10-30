// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
const num = 56.5678;
// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart = Math.floor(num);
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
let decimalPart = num - Math.floor(num);
    decimalPart = Number(decimalPart.toFixed(4));
    // another way to achieve this would be 
    decimalPart = Math.trunc(decimalPart * 10000) / 10000;
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
const roundedNum = Math.round(num);
// Log your variables to the console to check your answers
console.log("wholeNumberPart is " + wholeNumberPart);
console.log("decimalPart is " + decimalPart);
console.log("decimalPart is " + decimalPart);
console.log("decimalPart is " + roundedNum);