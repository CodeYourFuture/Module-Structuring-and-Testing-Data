let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange} %`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


/*
a) There are 4 function calls in total:
   1. carPrice.replaceAll(",", "")
   2. priceAfterOneYear.replaceAll(",", "")
   3. Number(...) (used in two places)

b) The error occurs on the line where priceAfterOneYear is reassigned.
   Reason: Missing comma in the replaceAll function call. 
   Fix: Correct it to priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

c) Variable reassignment statements:
   1. carPrice = Number(carPrice.replaceAll(",", ""));
   2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

d) Variable declaration statements:
   1. let carPrice = "10,000";
   2. let priceAfterOneYear = "8,543";
   3. const priceDifference = carPrice - priceAfterOneYear;
   4. const percentageChange = (priceDifference / carPrice) * 100;

e) The expression Number(carPrice.replaceAll(",", "")):
   - Removes commas from the carPrice string and converts it to a number.
   - Purpose: To get a numerical value from the string for calculations.
*/
