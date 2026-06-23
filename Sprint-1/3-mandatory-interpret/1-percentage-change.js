let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));// coma was missing.
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer to a): There are 4 function calls in this file, which are on the lines 4, 5, 6 and 7 . 
//
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer to b): The error is coming from line 5, where coma is missing in "replaceAll()"" function.
//
 //c) Identify all the lines that are variable reassignment statements
// Answer to c) Variables are reassigned on lines: 4 and 5
//
// d) Identify all the lines that are variable declarations
// Answer to d) Variables are declared on lines: 1, 2, 6, 7
//
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - 
// what is the purpose of this expression?
// Answer to e): The expression Number(carPrice.replaceAll(",","")) is replacing all the comas in the string in the variable
//carPrice with an empty string and then turns it into number. 
// The purpose of it is that number can now be used to perform mathematical operations.
