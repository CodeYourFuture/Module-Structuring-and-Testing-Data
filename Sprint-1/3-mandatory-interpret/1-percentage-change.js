let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file:
// Lines 4 and 5 - replaceAll function call
// Lines 4 and 5 - Number function call
// Line 10 - console.log function call

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5 had an error because there was a missing comma between "," and "" in replaceAll function call. - SyntaxError

// c) Identify all the lines that are variable reassignment statements
// Lines 4  and 5 are variable reassignment statements for carPrice and priceAfterOneYear.

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7 and 8 are variable declarations for carPrice, priceAfterOneYear, priceDifference and percentageChange.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replaceAll function is used to replace all the occurrences of a character in a string.
// The expression Number() is converting the string carPrice, that was pruned of the comma, to a number.
