let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 function calls, line 4,5 and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5,SyntaxError: missing ) after argument list just add a comma priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
//Line 4 ,5.

// d) Identify all the lines that are variable declarations
//1,2,7, and 8.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Replace all commas with an empty string , then convert the result to a number.
//the purpose is change from 10,000 formate to 10000.
