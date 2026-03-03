let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made 
//There are 5 function calls in this file. On line 4,5 and 10. 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Syntax error on line 5 which has been fixed. A comma is missing between the arguments. 
// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5. 
// d) Identify all the lines that are variable declarations
//Lines 1,2, 7 and 8. 
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//It has converted the string "10,000" to a number by first removing the comma using replaceAll() method and then converting the resulting string to a number using the Number() function. This allows us to perform mathematical operations on the carPrice variable.