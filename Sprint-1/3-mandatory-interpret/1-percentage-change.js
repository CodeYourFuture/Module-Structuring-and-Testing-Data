let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are 4 function calls in the code. replaceAll()Line: 4 , 5 . Number() ,line:4 , 5.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//the error is in line 5. This error is happening because replaceAll() is not supported in some older versions of JavaScript.priceAfterOneYear = Number(priceAfterOneYear.replace(/,/g, ""));

// c) Identify all the lines that are variable reassignment statements
//Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
//Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
/*The following lines are variable declarations:

Line 1: let carPrice = "10,000";
Line 2: let priceAfterOneYear = "8,543";
Line 7: const priceDifference = carPrice - priceAfterOneYear;
Line 8: const percentageChange = (priceDifference / carPrice) * 100;  */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//replaceAll(",", "") removes all commas from the string carPrice.
//Number(...) converts the string "10000" to the actual number 10000.