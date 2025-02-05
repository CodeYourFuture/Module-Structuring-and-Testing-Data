let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", "")); //console.log(typeof(carPrice)); console.log(carPrice);
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// four functions 
// line 4 and line 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There is a comma missing on line 5 in the replaceAll() function.

// c) Identify all the lines that are variable reassignment statements
//line 4, 5, 

// d) Identify all the lines that are variable declarations
// line 1, 2, 7, 8 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// In the carPrice the comma is. replace with nothing, and then the result converted to number type.
