let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file: lines 3, 4 and 7
// Line 4: carPrice,replaceAll(",", "") removes all commas from string
// Line 4: Number(...) converts string into number
// Line 5: priceAfterOneYear.replaceAll("," "") removes all commas from string
// Line 5: Number(...) converts string to number
// Line 10: console.log(`The percentage change is ${percentageChange}`) prints percentage change to output

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5 is missing a comma in the replaceAll function call. This is causing a syntax error because the function expects two arguments, but only one is provided. 

// c) Identify all the lines that are variable reassignment statements
// Variable reassignment means giving an existing variable a new value.
// Lines 4 and 5 reassign new values to carPrice and priceAfterOneYear respectively.

// d) Identify all the lines that are variable declarations
// Variable declaration means creating a new variable and assigning it a value for the first time.
// Line 1 declares carPrice with let
// Line 2 declares priceAfterOneYear with let
// Line 7 declares priceDifference with const
// Line 8 declares percentageChange with const

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It converts the string value of carPrice into a number value and removes the comma.
