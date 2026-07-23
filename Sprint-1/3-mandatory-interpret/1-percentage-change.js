let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*
  a) There are two functions Line 4 & 5: 
  for eg, The expression Number(carPrice.replaceAll(",","")) is doing the following:
  1. carPrice.replaceAll(",","") - This removes any commas from the carPrice string.
  2. Number(...) - This converts the resulting string into a number.
  b) The uncaught syntax error is coming from line 5. The error occurs because there is a missing comma in the replaceAll method. 
  It should be carPrice.replaceAll(",", "") instead of carPrice.replaceAll("," ""). To fix this, add the missing comma.
c) The variable reassignment statements are on lines 4 and 5, where carPrice and priceAfterOneYear are being reassigned to their numeric values.
d) The variable declarations are on lines 1 and 2, where carPrice and priceAfterOneYear are declared using the let keyword.

e) The purpose of the expression Number(carPrice.replaceAll(",", "")) is to convert a string representation of a number (with commas as thousands separators) into an actual number that can be used in mathematical operations.

 Generally, the purpose of this expression is to convert a string representation of a number (with commas as thousands separators) into a actual number that can be used in mathematical operations.
*/