let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//answer: 
// there are 5 function calls in this file:
//2 times  replaceAll function is called  to remove commas
// 2 times Number function is called to convert string to number
//1 time console.log is called to print the output to the console.


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//answer:
// There is a syntaxError on line 5. A comma is missing.

// c) Identify all the lines that are variable reassignment statements

//Answer:
//2 times 


// d) Identify all the lines that are variable declarations
//Answer: 4 times

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Answer 
// Number function is called to convert string to number and replaceAll is called to remove the comma.
