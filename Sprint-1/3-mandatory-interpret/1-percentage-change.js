let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// carPrice.replaceAll(",", "") - line 4
// Number(...) - line 4, wraps the result of replaceAll
// priceAfterOneYear.replaceAll("," "") - line 5
// Number(...) - line 5, wraps the second result of replaceAll
// console.log(..) - line 9
// Answer: Overall, there are 5 function calls, on lines 4, 5 and 9.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Error: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// The red line on replaceAll("," "") indicates that there is a syntax error on line 5.
// A comma was missing between the two arguments inside the replaceAll function call.
// To fix this, I added a comma between the two arguments like this: replaceAll(",", "").

// Error: SyntaxError: missing ) after argument list and price AfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// The error appears on the console.log line because the string was written using smart quotes instead of normal JavaScript quotes.
// Smart quotes break the strong syntax rules of JavaScript.
// To fix this, replace the smart quotes with straight quotes.

// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));  Line 4
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  Line 5

// d) Identify all the lines that are variable declarations
// let carPrice = "10,000";  Line 1
// let priceAfterOneYear = "8,543";  Line 2
// const priceDifference = carPrice - priceAfterOneYear;  Line 7
// const percentageChange = (priceDifference / carPrice) * 100;  Line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) is removing all the commas from carPrice string by replacing every comma with an empty string.
// The purpose is to clean the value so that it can be converted to a proper number using Number().
