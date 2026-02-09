let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are a total of 5 different function calls: carPrice = replaceAll(",", ""));, priceAfterOneYear = replaceAll(",", ""));, 
// Number(carPrice), Number(priceAfterOneYear, console.log(`The percentage change is ${percentageChange}`);.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The syntax error is originating on line 5, this is due to a missing ',' in the function priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));.

// c) Identify all the lines that are variable reassignment statements
// The lines that are vvariable declarations use let or const: carPrice, priceAfterOneYear.

// d) Identify all the lines that are variable declarations
// The lines that are vvariable declarations use let or const: let carPrice, let priceAfterOneYear, const priceDifference and const percentageChange.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This particular expression is doing two steps. First it takes "10,000" and removes the commas so the output then is "10000"
// THe second step converts the the string into a number - this is likely because the next function then subtracts the number to find the difference between 
// carPrice and priceAfterOneYear and stores it within priceDifference variable declaration. 