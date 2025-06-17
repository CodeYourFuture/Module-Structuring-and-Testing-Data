let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls on this file: in line 4, 5 and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5 because of a missing comma.

// c) Identify all the lines that are variable reassignment statements
// The lines that are variables reassignment statements are lines 4 and 5.

// d) Identify all the lines that are variable declarations
// The lines that are variable declarations are lines 1, 2, 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes all commas from the string and then converts it to a number.
