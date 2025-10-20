let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls. Number(), carPrice.replaceAll(),priceAfterOneYear.replaceAll(), console.log(),Number().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error is at line 5. It is a Syntax error. A comma is expected in between the two strings.By adding , in between the stings.

// c) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

// d) Identify all the lines that are variable declarations
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It replaces the number to a clean string.
