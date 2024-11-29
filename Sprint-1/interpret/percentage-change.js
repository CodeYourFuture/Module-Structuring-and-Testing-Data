let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ***Answer***: There are 3 function calls in this file. The first is Number() and second is console.log. Line 4, line 5 and line 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ***Answer***: replaceAll() is not a function. We can fix this problem by using replace() with a regular expression instead.

// c) Identify all the lines that are variable reassignment statements
// Line 4, line 5

// d) Identify all the lines that are variable declarations
// Line 1, line 2

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression is converting the string carPrice to a number by removing all commas and then converting the result to a number.
// The purpose of this expression is to remove the commas from the string so that the subtraction in line 6 can be performed.
