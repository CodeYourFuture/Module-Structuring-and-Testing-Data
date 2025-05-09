let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are two function calls here. replaceAll and console.log


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//LIne 5 was missing a separation comma

// c) Identify all the lines that are variable reassignment statements
// Line 4 and LIne 5 have variables being reassigned.

// d) Identify all the lines that are variable declarations
// Line 1, line 2, line 7 and line 8 have variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//This expression removes the comma in the price from 10,000 to 10000
