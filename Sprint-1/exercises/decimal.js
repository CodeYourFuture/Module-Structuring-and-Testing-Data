//const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

const num = 56.5678;
let wholeNumberPart = Math.floor(num);
console.log(wholeNumberPart);

let decNumberPart = num - wholeNumberPart;
console.log(decNumberPart);

let wholeNumber = Math.round(num);
console.log(wholeNumber);

/*gisdellabella@Giss-MBP exercises % node decimal.js
56
0.5677999999999983
57
gisdellabella@Giss-MBP exercises % */
