let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: There are 5 function calls on lines 4, 5 and 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: line 5 there is a comma missing in the replaceAll parameters.
// c) Identify all the lines that are variable reassignment statements
// Answer:  Lines 4 and 5
// d) Identify all the lines that are variable declarations
// Answer: Lines 1, 2, 7 and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: The purpose is to remove the comma from carPrice and turn it into a number, so it can be used in the calculation.
// Without doing this, JavaScript would treat it like a string instead of a proper number.
