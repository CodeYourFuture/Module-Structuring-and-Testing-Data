let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 6 function calls: Line 4 (replaceAll, Number), Line 5 (replaceAll, Number), Line 10 (console.log)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// SyntaxError on line 5: missing comma between arguments "," and ""
// Fix: priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice, Line 2: let priceAfterOneYear, Line 7: const priceDifference, Line 8: const percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Converts string with commas ("10,000") to number (10000) for mathematical calculations
// replaceAll(",", "") removes commas, Number() converts string to number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
