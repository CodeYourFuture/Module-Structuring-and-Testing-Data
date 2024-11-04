const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
const num = 56.5678;
const wholeNumberPart=Math.floor(num);
console.log(wholeNumberPart);


const num=56.5678;
const whole NumberPart=Math.floor(num);
const decimalPart=num-wholeNumberPart;
console.log(decimalPart);

const roundedNum=Math.floor(num);
console.log(roundedNum);
