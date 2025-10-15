let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 function calls 
//Line 4: carPrice.replaceAll(",", "")
//Line 4: Number(...) – wraps the above
//Line 5: priceAfterOneYear.replaceAll(",", "") ✅ But this line has a syntax error (we’ll get to it)
//Line 5: Number(...) – wraps the above
//Line 10: console.log(...)


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//syntax error! On line 5, there's a missing comma in the replaceAll method. 
//correct code should be
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression converts a string with commas into a number that can be used for mathematical calculations:
// 1. carPrice.replaceAll(",", "") - removes all commas from the string "10,000" → "10000"
// 2. Number(...) - converts the cleaned string "10000" into the number 10000
// Purpose: Strings with commas cannot be used in math operations, so we need to clean and convert them to numbers first
