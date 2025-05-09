let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//two functions car pice and pice after one year ,line 4,5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//line 5 has syntax error for  missing commas 
// c) Identify all the lines that are variable reassignment statements
//in line 4 and 5 reassign new values to the variables carPrice and priceAfterOneYear.

// d) Identify all the lines that are variable declarations
//the line that variable declared 
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//this expression  used to remove any commas from a string representing a number and then convert it into an actual numerical value for further calculations.