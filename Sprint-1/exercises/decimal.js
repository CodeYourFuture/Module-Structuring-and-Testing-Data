const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
let wholeNumberPart = Math.floor(num); // Created a whole number with Math.floor 
console.log(wholeNumberPart);
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
let decimalPart = num - Math.floor(num); // Created a decimal pert of num 
console.log(decimalPart.toFixed(4));
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
let roundedNum = Math.round(num); // Created a round number nearest to the whole number
console.log(roundedNum);
// Log your variables to the console to check your answers
