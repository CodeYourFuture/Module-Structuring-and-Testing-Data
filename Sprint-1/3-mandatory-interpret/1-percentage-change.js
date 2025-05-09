let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); // missing a comma

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 4 function calls, in lines 4, 5, 8, and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// line 5 two values are passed into the replaceAll method, but aren't comma separated. Fixed error, by separating values with a comma.

// c) Identify all the lines that are variable reassignment statements

// In lines 4 and 5, 'priceDifference' and 'priceAfterOneYear' are reassigned.

// d) Identify all the lines that are variable declarations

// 1, 2, 7, 8 are all variable declarations, and 4 and 5 are variable redeclarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Type conversion: converts values from string to number, in order to be used in calculations later on in the program.
