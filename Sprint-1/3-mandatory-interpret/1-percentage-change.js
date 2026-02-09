let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? 
// 1) carPrice.replaceAll(",", "")
// 2) Number(carPrice.replaceAll(",", ""))
// 3) priceAfterOneYear.replaceAll(",", "")
// 4) Number(priceAfterOneYear.replaceAll(",", ""))
// 5) console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The syntax error is originating on line 5, this error occurs because replaceAll is missing ',' in between the arguments -  priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));.

// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// The lines that are variable declarations use let or const: let carPrice, let priceAfterOneYear, const priceDifference and const percentageChange.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This particular expression is doing two steps. First it takes "10,000" and removes the commas so the output then is "10000"
// The second step converts the the string into a number - this is likely because the next function then subtracts the number to find the difference between 
// carPrice and priceAfterOneYear and stores it within priceDifference variable declaration. 