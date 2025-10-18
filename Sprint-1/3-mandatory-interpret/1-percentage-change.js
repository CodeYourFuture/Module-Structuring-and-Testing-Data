let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are five function calls: carPrice.replaceAll(",", ""), Number(carPrice.replaceAll(",", "")), priceAfterOneYear.replaceAll(",", ""), Number(priceAfterOneYear.replaceAll(",", "")), and console.log(...).

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error comes from the line priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); because there is a missing comma between the arguments in replaceAll, which causes a syntax error. It can be fixed by writing replaceAll(",", "") instead.

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are carPrice = Number(carPrice.replaceAll(",", "")); and priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));.

// d) Identify all the lines that are variable declarations
// The variable declarations are let carPrice = "10,000";, let priceAfterOneYear = "8,543";, const priceDifference = carPrice - priceAfterOneYear;, and const percentageChange = (priceDifference / carPrice) * 100;.

// e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing - what is the purpose of this expression?
// The expression first removes the comma from the string "10,000" using replaceAll(",", ""), resulting in "10000", and then converts that string into a number using Number(), so that it can be used in mathematical calculations.
