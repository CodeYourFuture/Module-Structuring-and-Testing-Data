let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//There are two function calls in the file. They are:

//a. carPrice.replaceAll(",", "") – This calls the replaceAll() method to remove commas from the carPrice string.
//priceAfterOneYear.replaceAll(",", "") – This also calls the replaceAll() method to remove commas from the priceAfterOneYear string.

//FULL RESPONSE BELOW:

// --- CODE STARTS HERE ---

let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// Removing commas and converting to numbers
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// --- QUESTIONS & ANSWERS ---

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer:
// There are 5 function calls:
// Line 4: carPrice.replaceAll(",", "")
// Line 4: Number(...)
// Line 5: priceAfterOneYear.replaceAll(",", "")
// Line 5: Number(...)
// Line 8: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer:
// The original error was in line 5 due to a missing comma in replaceAll.
// Incorrect: replaceAll("," "")
// Corrected: replaceAll(",", "")
// The error occurred because the function call had incorrect syntax, missing a second argument.
// Fix: Add the missing comma in replaceAll

// c) Identify all the lines that are variable reassignment statements
// Answer:
// Line 4: carPrice is reassigned with a numeric version
// Line 5: priceAfterOneYear is reassigned with a numeric version

// d) Identify all the lines that are variable declarations
// Answer:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 6: const priceDifference = ...
// Line 7: const percentageChange = ...

// e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing - what is the purpose of this expression?
// Answer:
// First, carPrice.replaceAll(",", "") removes commas from the string, turning "10,000" into "10000"
// Then, Number(...) converts the string "10000" into the number 10000
// The purpose is to convert a formatted price string into a number so that mathematical operations can be performed.
