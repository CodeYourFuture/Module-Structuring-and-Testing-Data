let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4: Number(), carPrice.replaceAll(",", "") - 2 function calls
// Line 5: Number(), priceAfterOneYear.replaceAll(",", "") - 2 function calls
// Line 10: console.log() - 1 function call
// In total: 5 function calls

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Its line 5 - missed comma in replaceAll method. Fixed now - added comma after the first parameter.

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression transforms data type from String to Number and removes all commas from the String value of carPrice, so "10,000" becomes "10000".
