let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls in this file:
// 1. Number(carPrice.replaceAll(",", ""))
// 2. Number(priceAfterOneYear.replaceAll("," ""))
// 3. console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error occurs on line 5, where priceAfterOneYear is assigned a value. 
// The issue is that there is a syntax error caused by a missing comma between the arguments of replaceAll().
// To fix this, a comma should be added after the first argument in the replaceAll function call.
// The corrected line should be:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); 

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) is converting the string representation of the car price into a number.
// This is necessary to perform arithmetic operations, such as calculating the percentage change.
