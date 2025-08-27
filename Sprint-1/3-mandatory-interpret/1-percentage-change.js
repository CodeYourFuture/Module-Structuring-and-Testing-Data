let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file. The code consists of variable assignments and calculations without any function definitions or calls.
// replaceAll(",", "") (twice)
// Number(...) (twice)
// console.log(...) (once)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There are no errors in the code. The code runs successfully and calculates the percentage change in car price without any issues.

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are:
// 1. carPrice = Number(carPrice.replaceAll(",", ""));
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// The variable declarations are:
// 1. let carPrice = "10,000";
// 2. let priceAfterOneYear = "8,543";
// 3. const priceDifference = carPrice - priceAfterOneYear;
// 4. const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression `Number(carPrice.replaceAll(",", ""))` is converting the string representation of the car price, which includes commas (e.g., "10,000"), into a number. The `replaceAll(",", "")` part removes all commas from the string, resulting in "10000", and then the `Number()` function converts this string into a numeric value (10000). This is necessary for performing arithmetic operations on the price.
