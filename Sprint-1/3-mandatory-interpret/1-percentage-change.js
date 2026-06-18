let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answer
// a) Line 4: Number(carPrice.replaceAll(",", "")); and carPrice.replaceAll(",", "")
// a) Line 5: Number(priceAfterOneYear.replaceAll("," "")); and priceAfterOneYear.replaceAll("," "")

// b) The error is coming from line 5. The error is occurring in the replaceAll method a comma is missing between ("," "") it should be (",", "") to fix the problem.

// c) line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// c) line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Line 1: let carPrice = "10,000";
// d) Line 2: let priceAfterOneYear = "8,543";
// d) Line 7: const priceDifference = carPrice - priceAfterOneYear;
// d) Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Number() is converting the string into a number. replaceAll() is removing the comma from the string.