let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

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
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

// d) Identify all the lines that are variable declarations
//Answer
//4 times
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Answer 
//The expression Number(carPrice.replaceAll(",", "")) first removes any commas from the carPrice string using replaceAll, then converts the cleaned string into a number using Number. This is necessary because strings like "10,000" cannot be converted directly into numbers due to the comma.
