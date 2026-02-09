let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Function calls are when we use () like: something()
// Line 4: carPrice.replaceAll(",", "")
// Line 4: Number(...)
// Line 5: priceAfterOneYear.replaceAll(",", "")
// Line 5: Number(...)
// Line 10: console.log(...)
// Answer: 5 function calls

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error comes from the console.log line because it uses single quotes with ${percentageChange}
// ${...} only works inside backticks `...` (template strings)
// Fix: use backticks: console.log(`The percentage change is ${percentageChange}`);

// c) Identify all the lines that are variable reassignment statements
// Reassignment means we change an existing variable's value (no let/const on the line)
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// Answer: lines 4 and 5

// d) Identify all the lines that are variable declarations
// Declarations use let or const
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;
// Answer: lines 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing - what is the purpose of this expression?
// replaceAll(",", "") removes commas from the string (e.g. "10,000" becomes "10000")
// Number(...) converts the cleaned string into a real number so we can do maths with it
// Purpose: turn "10,000" (text) into 10000 (number)

