let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file.
// Line 4 calls replaceAll() and Number().
// Line 5 calls replaceAll() and Number().
// Line 10 calls console.log().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// I changed the value from a string to a number by wrapping the replaceAll() result in Number().

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements because its declared on lines 1 and 2.


// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7, and 8 are variable declarations because they declare variables using let and const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//// Removes commas and converts the string to a number.
