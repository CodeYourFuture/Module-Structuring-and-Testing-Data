let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// carPrice.replaceAll(",", "") (line 4)
// Number(carPrice.replaceAll(",", "")) (line 4)
// priceAfterOneYear.replaceAll(",", "") (line 5)
// Number(priceAfterOneYear.replaceAll(",", "")) (line 5)
// console.log(`The percentage change is ${percentageChange}`) (line 10)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// Syntax error - Arguments need to be separated by a comma

// c) Identify all the lines that are variable reassignment statements

// carPrice = Number(carPrice.replaceAll(",", "")) (line 4)
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")) (line 5)

// d) Identify all the lines that are variable declarations

// let carPrice = "10,000" (line 1)
// let priceAfterOneYear = "8,543" (line 2)
// const priceDifference = carPrice - priceAfterOneYear (line 7)
// const percentageChange = (priceDifference / carPrice) * 100 (line 8)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// (carPrice.replaceAll(",", "")) takes the string stored in the carPrice variable ("10,000") and removes all instances of commas (",")
// Without this, the result of Number(carPrice) would be NaN (Not a Number)

// Number(...) then takes the edited string ("10000") and converts it to a number (10000) so that numerical operations can be performed on this value
