let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// function call made:
// Number and replace.All in line 4 (2)
// Number and replace.All in line 5 (2)
// console.log in line 10 (1)
// total function calls: 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// error: line 5, input missing to function call
// add , between the inputs

// c) Identify all the lines that are variable reassignment statements
// line 4, line 5

// d) Identify all the lines that are variable declarations
// line 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// the price is a string (with a comma) instead of a number,
// and the replaceAll function deletes all commas in the string so that carPrice can be used as a number
