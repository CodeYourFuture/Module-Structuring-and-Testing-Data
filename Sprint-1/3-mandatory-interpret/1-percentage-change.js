let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*
  - There 2 function calls in this file. On line 4 and 5
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There"s a SyntaxError on line 5. To fix it, we need to add a comma between the string with comma and the empty strings

// c) Identify all the lines that are variable reassignment statements: Line 4 and 5 are variable reassignment statements.

// d) Identify all the lines that are variable declarations: Line 1, 2, 6 and 7.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*
  - Number(carPrice.replaceAll(",","")): carPrice.replaceAll() removes all commas in the string and Number() converts the string into a JS number.
  - The purpose of this above expression is to replace all commas with an empty double strings to convert the string to a Javascript number.
*/
