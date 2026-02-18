let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 1. carPrice.replaceAll(",", "") 
// 2. priceAfterOneYear.replaceAll(",", "") 
// 3. Number(...) 
// 4. console.log(...) - 
// 5. (priceDifference / carPrice) * 100 - line 7 (this is an expression that involves division and multiplication, but it does not involve a function call)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// The error is on line 5 where `priceAfterOneYear.replaceAll(",", "")` is called. The syntax error is due to a missing closing quote in the `replaceAll` method.
// Fix: Change `priceAfterOneYear.replaceAll(",", "")` to `priceAfterOneYear.replaceAll(",", "")`

// c) Identify all the lines that are variable reassignment statements

// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations

// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression `carPrice.replaceAll(",", "")` removes all commas from the string `carPrice`, converting it to a number that can be used in mathematical operations. This is necessary because the original value is a string with commas (e.g., "10,000"), which cannot be directly used in arithmetic calculations. The `Number()` function then converts the resulting string (e.g., "10000") into a numeric value.