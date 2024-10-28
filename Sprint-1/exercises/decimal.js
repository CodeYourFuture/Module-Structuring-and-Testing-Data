const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart=console.log(`the whole part of number${num} is : ${Math.trunc(num)}`);
//or
function ReturnWholeNumber(num){
const    wholeNumberPart=Math.trunc(num) ;
return wholeNumberPart;
}
const result=ReturnWholeNumber(num);
console.log(`the whole part of number ${num} is :${result}`);

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
console.log(`Decimal part of ${num}is: ${(num-Math.trunc(num)).toFixed(3)}`);

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
console.log(`Rounded number from ${num} is: ${Math.round(num)}`)

// Log your variables to the console to check your answers
