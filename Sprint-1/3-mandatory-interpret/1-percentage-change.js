let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4: replaceAll(",", "") and Number() 
// Line 5: replaceAll(",", "") and Number() 
// Line 10: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5 has a SyntaxError - there is a missing comma between "," and "" in replaceAll(",""  should be replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = ...
// Line 5: priceAfterOneYear = ...

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice = "10,000"
// Line 2: let priceAfterOneYear = "8,543"
// Line 7: const priceDifference = ...
// Line 8: const percentageChange = ..

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replaceAll(",", "") removes all commas from the string e.g. "10,000" becomes "10000"
// Number() then converts that string into an actual number so we can do maths on it