let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There is a total of 5 function calls:

carPrice.replaceAll(",", "")
Number(...)
priceAfterOneYear.replaceAll("," "") 
Number(...) 
console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// This line has a syntax error:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// The problem is that there’s a missing comma between ("," and "")
// /By adding a comma the code is correct:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements

carPrice = Number(carPrice.replaceAll(",", ""));

priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations

let carPrice = "10,000";

let priceAfterOneYear = "8,543";

const priceDifference = carPrice - priceAfterOneYear;

const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//carPrice.replaceAll(",", "") removes all the commas from the string turning it into 10000. Number(...) converts that string into a number so that you can do math with it.

