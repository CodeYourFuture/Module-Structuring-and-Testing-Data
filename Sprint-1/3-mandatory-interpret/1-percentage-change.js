let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// const percentageChange = (priceDifference / carPrice) * 100;

// There is no function being called in this line above.
// This is just a mathematical expression that divides 
// priceDifference by carPrice, then multiplies by 100 to get a percentage.
// Because a function call in JavaScript is something that looks like,
// functionName(...)
// But in  this (priceDifference / carPrice) * 100, there are no parentheses
// after a function name or no function names being used here.
// So this line does not contain a function call.

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
