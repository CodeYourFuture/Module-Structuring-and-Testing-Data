let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 function calls in the code.
// carPrice.replaceAll(",", "") → Line 4
// Number(carPrice.replaceAll(",", "")) → Line 4
// priceAfterOneYear.replaceAll(",", "") → Line 5
// Number(priceAfterOneYear.replaceAll(",", "")) → Line 5


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Error: Syntax Error on Line 5
// The replaceAll() function is missing a comma between the arguments.

// c) Identify all the lines that are variable reassignment statements
// Variable reassignment happens in Lines 4 and 5

// d) Identify all the lines that are variable declarations
// Variable declarations are in Lines 1 and 2

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression converts the carPrice string (which contains commas, e.g., "10,000") into a number without commas.
// carPrice.replaceAll(",", "") → Removes all commas from the string "10,000", resulting in "10000".
// Number("10000") → Converts the cleaned string into the number 10000.
