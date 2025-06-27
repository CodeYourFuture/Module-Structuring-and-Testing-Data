let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(", ", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer: There are 5 function calls:
// - carPrice.replaceAll(...)
// -  Number(...) : Line 3
// - priceAfterOneYear.replaceAll(...)
// -  Number(...) : Line 5
// - console.log(...).


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer:
//There was an error in line 5 because a comma was missing.
// Instead of the original example in line, which was: replaceAll(", " "")). I inserted a comma in order to fix the code: replaceAll(", ", ""));


// c) Identify all the lines that are variable reassignment statements
//Answer:
// Lines 4 and 5 are variable reassignments:
//In Line 4 the value changes from "10,000" (a string) to 10000 (a number): carPrice = Number(carPrice.replaceAll(",", ""));
//In line 5 the value changes from "8,543" (a string) to 8543 (a number): priceAfterOneYear = Number(priceAfterOneYear.replaceAll(", ", ""));


// d) Identify all the lines that are variable declarations
//Answer:
// These variable declarations are identified by these keywords: let and const:

// Line 1: let carPrice = "10,000";

// Line 2: let priceAfterOneYear = "8,543";

// Line 7: const priceDifference 

// Line 8: const percentageChange


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Answer:
//carPrice.replaceAll(",", ""): removed commas from the string "10,000", which became "10000"
//Number(...): converted the string "10000" into a number, 10000