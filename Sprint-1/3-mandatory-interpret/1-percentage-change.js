let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 5 function calls in this file, they are on lines 4, 5, and 10
// function calls: replaceAll(), replaceAll(), Number(), Number(), console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error was coming from line 5 there was a comma missing between the 2 quotations ("," "") by adding the comma the code was fixed and it worked as it should.

// c) Identify all the lines that are variable reassignment statements
// the variable reassignment statements are on lines 4 and 5
// variable reassignments: carPrice = Number(carPrice.replaceAll(",", "")), priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""))

// d) Identify all the lines that are variable declarations
// the variable declaration statements are on lines 1, 2, 7 and 8
// variable declarations: let carPrice, let priceAfterOneYear, const priceDifference, const percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* the expression is taking the variable carPrice and replacing all the commas in the string with nothing and then converting 
the string into a number so that it can be used in calculations.*/
