let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: carPrice = Number(carPrice.replaceAll(",", "")); function: .replaceAll
//         priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); function: .replaceAll
//         console.log(`The percentage change is ${percentageChange}`); function: console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// SyntaxError: missing ) after argument list
// there is a missing (,) in line 5

// c) Identify all the lines that are variable reassignment statements
// Answer: carPrice = Number(carPrice.replaceAll(",", ""));
//         priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Answer: let carPrice = "10,000";
//         let priceAfterOneYear = "8,543";
//         const priceDifference = carPrice - priceAfterOneYear;
//         const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: carPrice.replaceAll(",", ""): This part of the expression removes all commas from the string carPrice. For example, if carPrice is 10,000, this part of the expression will convert it to "10000".
// Number: This part converts the resulting string "10000" into a numeric value of 10000.
// The purpose of this expression is to transform a comma separated number string into a proper numerical format so that it can be use it arithmetic operation.
