let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 2 function calls in the code. they are in lines 4 & 5.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is on line 5 because the syntax for ReplaceAll() function is missing a comma between the searchValue string and the replaceValue string.

// c) Identify all the lines that are variable reassignment statements
// the lines with variable reassignment statement are 4 & 5.

// d) Identify all the lines that are variable declarations
// the lines with variable declaration are 1, 2, 7, & 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// this expression removes the coma in the string value of variable carPrice and turn it into a number.
