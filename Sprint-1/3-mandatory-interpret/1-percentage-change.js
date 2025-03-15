let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There is no function on this code. The function should defined with the function keyword.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It says there is a SyntaxError. There is missing comma on the line 5 between "," and "". 

// c) Identify all the lines that are variable reassignment statements
// In the line 4 and 5 reassign the values for carPrice and priceAfterOneYear variables. 

// d) Identify all the lines that are variable declarations
// In the lines 1, 2, 7 and 8th lines has the variable declarations. Variables are created and declared the values.  

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The purpose is delete the ",". 