let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*
    There are 5 function calls in this file.
    They are on the following lines:
    Line 4: carPrice.replaceAll(",", "") 
    Line 5: priceAfterOneYear.replaceAll(",", "")
    Line 4: Number(carPrice.replaceAll(",", ""))            
    Line 5: Number(priceAfterOneYear.replaceAll(",", ""))
    Line 8: console.log(`The percentage change is ${percentageChange}`)
*/
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*
Line 5 - SyntaxError: missing , after argument list (the comma separating the arguments is missing). I added the comma.
*/
// c) Identify all the lines that are variable reassignment statements
/*
Lines 4 and 5 are variable reassignment statements.
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/
// d) Identify all the lines that are variable declarations
/*
Lines 1 and 2 are variable declarations.
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
Lines 7 and 8 are also variable declarations.
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
*/
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression is converting the string value of carPrice, which contains a comma, into a number by first removing the comma using the replaceAll method and then converting the resulting string into a number using the Number function. This allows for mathematical operations to be performed on carPrice.
