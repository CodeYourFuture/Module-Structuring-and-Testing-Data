let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are three function calls in the code. The lines where function calls are made are:

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
///priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements:The lines that are variable reassignment statements are:

// Line 6: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 7: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// Declaration: This is when you create a variable for the first time using keywords like let, const, or var. For example:
// javascript
// Copy code
// let x = 10; // Declaration
// Reassignment: This occurs when you already have a variable and you assign a new value to it. For example:
// javascript
// Copy code
// x = 20; // Reassignment
// In Your Code: In your provided code:

// Reassignment statements are lines where the variables carPrice and priceAfterOneYear are given new values after their initial declarations. Here are the lines identified as variable reassignment statements:
// carPrice = Number(carPrice.replaceAll(",", "")); (Line 6)
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); (Line 7)
// d) Identify all the lines that are variable declarations:lines 1,2,,6,7

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?make sparate form ',' breakdown of the expression
// Breakdown of the expression:

// carPrice.replaceAll(",", ""):

// This part of the expression calls the replaceAll method on the string stored in carPrice.
// It looks for all occurrences of the comma , in the string "10,000" and replaces them with an empty string "".
// As a result, it converts "10,000" into the string "10000".
// Number(...):

// The Number function takes the string "10000" (which has been processed by the replaceAll method) and converts it into a numeric value.
// Therefore, the final result of Number(carPrice.replaceAll(",", "")) will be the number 10000.
