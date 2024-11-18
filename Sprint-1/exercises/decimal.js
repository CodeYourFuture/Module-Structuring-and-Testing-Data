const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

wholeNumberPart = Math.floor(num); // Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
decimalPart = +(num % 1).toFixed(10);// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
roundedNum = Math.round(num);// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

answers = [wholeNumberPart, decimalPart, roundedNum];
// Log your variables to the console to check your answers
console.log(answers)