let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls in this file: 4, 5, and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error occurs on line 5, because there's a missing coma while calling arguments for the function. I just added the coma.

// c) Identify all the lines that are variable reassignment statements.
// There are 2 variable reassignment statements in this file: lines 4 and 5.

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7, and 8 are variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression removes the coma in the carPrice string and converts it to a number. 
// The purpose is to ensure that the carPrice variable holds a numeric value rather than a string, allowing for mathematical operations to be performed on it.
