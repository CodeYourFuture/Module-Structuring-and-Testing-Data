let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 1: carPrice.replaceAll(",", "")
// 2: Number(carPrice.replaceAll(",", ""))
// 3: priceAfterOneYear.replaceAll(",", "")
// 4: Number(priceAfterOneYear.replaceAll(",", ""))
// 5: console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5 - syntax error a missing comma - .replaceAll() needs a search value and replacement value without the missing comma
// it does not know where the one argument ends and te next one begins

// c) Identify all the lines that are variable reassignment statements
// line 4 and line 5

// d) Identify all the lines that are variable declarations
// line 1 , line 2 ,line 7 and line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Its removing the comma from the car price and replacing it with n empty string then converting the string to a number
