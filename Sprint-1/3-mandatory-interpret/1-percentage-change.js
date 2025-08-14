let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: there is 5 function call
// carPrice.replaceAll(",", ""));
// ber(carPrice.replaceAll(",", ""));
// priceAfterOneYear.replaceAll("," ""));
// Number(priceAfterOneYear.replaceAll("," ""));
// console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: in line five there is a syntax error, it missed this (,) between two argument

// c) Identify all the lines that are variable reassignment statements
// Answer: line 4 and 5

// d) Identify all the lines that are variable declarations
// Answer: lines 1, 2 and 7, 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: This removes all commas from the string "10,000" and returns "10000".
