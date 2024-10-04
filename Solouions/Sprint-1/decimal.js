const num = 56.4567;

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56
const wholeNumberPart = Math.floor(num);

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.4567
const decimalPart = num - wholeNumberPart;

// Create a variable called roundedNum and assign to it an expression that evaluates to 57
const roundedNum = Math.round(num);

// Log your variables to the console to check your answers
console.log(`Whole number part: ${wholeNumberPart}`);
console.log(`Decimal part: ${decimalPart}`);
console.log(`Rounded number: ${roundedNum}`);
