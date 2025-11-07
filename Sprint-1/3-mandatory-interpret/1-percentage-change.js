let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Function calls and their line numbers
// line 3 - carPrice.replaceAll(",", "") - Callls replaceAll() on the string to remove commas
// line 3 - Number(...) - Converts the resulting string to a number
// line 4 - priceAfterOneYear.replaceAll("," "") - Syntax error here - Intendend to replaceAll() but missing a comma between arguments
// line 8 - console.log(...) - Prints to console 
// // Total intended function calls: 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// Error: SyntaxError: missiong ) after argument list
// Reason:
// There's a missing comma between the arguments of replaceAll.
// The correct syntax should be:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements

// These are the lines where variables that were already declared are assigned a new value:
// carPrice = Number(carPrice.replaceAll(",", "");
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// Reassignments: Lines 3 and 4

// d) Identify all the lines that are variable declarations

// These are the lines where variables are first introduced:
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// carPrice.replaceAll(",", "") - removes all commas from the string "10,000", then it becomes "10000"
// Number("10000") - Converts the string "10000" into a numeric value 10000.
// Purpose: To convert a formatted currency string (with commas) into a number that can be used for mathematical calculations.

