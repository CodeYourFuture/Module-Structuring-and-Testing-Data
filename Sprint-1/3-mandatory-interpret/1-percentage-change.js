let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file:
// 1. `Number(carPrice.replaceAll(",", ""))`  Line 4
// 2. `carPrice.replaceAll(",", ""))`  Line 4
// 3. `Number(priceAfterOneYear.replaceAll(",", ""))` Line 5
// 4. `priceAfterOneYear.replaceAll(",", "")` Line 5
// 5. `console.log(...)` Line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is on line 5: 
// `priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));`
// It occured because there is a missing comma between arguments in replaceAll()
// To fix this, change it to `replaceAll(",", "")` without the space.
// The corrected line should be:
// `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));`


// c) Identify all the lines that are variable reassignment statements
// Line 4: `carPrice = Number(carPrice.replaceAll(",", ""));`
// Line 5: `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));`
// Lines 4 and 5 are variable reassignment statements because they were first 
// declared in lines 1 and 2.

// d) Identify all the lines that are variable declarations
// Line 1: `let carPrice = "10,000";`
// Line 2: `let priceAfterOneYear = "8,543";`
// Line 7: `const priceDifference = carPrice - priceAfterOneYear;`
// Line 8: `const percentageChange = (priceDifference / carPrice) * 100;`
// Lines 1,2, 7 and 8 are variable declarations because they introduce new variables

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression is converting the string representation of a car price, 
// which includes commas, into a number.
// It first removes the commas from the string using `replaceAll(",", "")`
// and then converts the string into a number using the `Number()` function.

