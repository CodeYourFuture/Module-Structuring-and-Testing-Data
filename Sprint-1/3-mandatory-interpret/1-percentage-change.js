let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

 
//answers

// a) in total we have 5 function calls here:
Line 4: carPrice.replaceAll(",", "")

Line 4: Number(...)

Line 5: priceAfterOneYear.replaceAll("," "") — this line has an error (missing comma)

Line 5: Number(...)

Line 8: console.log(...)


//b) on line 5 there is a missing coma between arguments. (",""") should be (",","")

//c) The variable reassignment statements are:

 Line 4: carPrice = Number(carPrice.replaceAll(",", ""));

Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

Line 8: console.log(`The percentage change is ${percentageChange}`);

//d) The variable declarations are:

// Line 1: let carPrice = "10,000";

// Line 2: let priceAfterOneYear = "8,543";

// Line 6: const priceDifference = carPrice - priceAfterOneYear;

// Line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) The expression

carPrice.replaceAll(",", "") removes all commas from the string (e.g., turns "10,000" into "10000").

Number(...) converts the resulting string "10000" into a number type 10000.

Purpose: To convert a formatted string number with commas into an actual number so you can do arithmetic on it.












