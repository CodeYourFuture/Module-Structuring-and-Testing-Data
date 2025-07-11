let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 2 function calls in this file:
// 1. Number(carPrice.replaceAll(",", ""));
// 2. Number(priceAfterOneYear.replaceAll("," ""));

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error occurs on the line where we try to convert `priceAfterOneYear` to a number using `Number(priceAfterOneYear.replaceAll("," ""))`.
// The issue is that there is a syntax error in the `replaceAll` method call,
// specifically the extra space between the comma and the closing double quote.
// To fix this, we should remove the space so it becomes `replaceAll(",", "")`
// After fixing this, the code will run without errors.

// c) Identify all the lines that are variable reassignment statements
// The lines that are variable reassignment statements are:
// 1. carPrice = Number(carPrice.replaceAll(",", ""));
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// The lines that are variable declarations are:
// 1. let carPrice = "10,000";
// 2. let priceAfterOneYear = "8,543";
// 3. const priceDifference = carPrice - priceAfterOneYear;
// 4. const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression `Number(carPrice.replaceAll(",", ""))` is converting the string representation of the car price,
// which contains commas (e.g., "10,000"), into a number by first removing the commas using `replaceAll(",", "")`
// and then converting the resulting string to a number using the `Number` function.
// The purpose of this expression is to ensure that the car price is in a numerical format so that mathematical operations can be performed on it,
// such as calculating the price difference and percentage change.
