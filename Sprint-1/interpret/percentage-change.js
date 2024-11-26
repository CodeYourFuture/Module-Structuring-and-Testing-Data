let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4, 5, 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The replaceAll function call in line 5 has an error due to a missing comma between "," and "". We should put comma and our code will be work.

// c) Identify all the lines that are variable reassignment statements
// lines: 4,5

// d) Identify all the lines that are variable declarations
// lines: 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The replaceAll function on the carPrice string to remove commas.
//  The Number function to convert the result of replaceAll to a number.
