let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*
There are 5 function calls in this file:

1. carPrice.replaceAll(",", "")
2. Number(carPrice.replaceAll(",", ""))
3. priceAfterOneYear.replaceAll(",", "")
4. Number(priceAfterOneYear.replaceAll(",", ""))
5. console.log(`The percentage change is ${percentageChange}`)
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*
The error occurs on this line: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

The error is caused by a missing comma between the two arguments passed to replaceAll().
JavaScript expects function arguments to be separated by commas, so it throws a SyntaxError.
Fix:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

// c) Identify all the lines that are variable reassignment statements
/*
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

These statements reassign new values to existing variables.
*/

// d) Identify all the lines that are variable declarations
/*
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*
The expression first removes all commas from the string stored in carPrice using replaceAll().
Example: "10,000" becomes "10000"
It then converts the resulting string into a number using Number().
The purpose of this expression is to convert the formatted price string into a numeric value so that it can be used in mathematical calculations.
*/