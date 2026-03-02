let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4 has a function call
// Line 5 has a function call
// line 10 has a function call

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// I have spotted the error on line 5 there was a missing coma between the two arguments of replaceAll() specifically between "," and "".

// c) Identify all the lines that are variable reassignment statements
// Line 4 and line 5 are variable reassignment statements.

// d) Identify all the lines that are variable declarations
// Line 1
// Line 2
// line 7
// line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replaceAll() removes commas and Number() converts the cleaned string into a number.

