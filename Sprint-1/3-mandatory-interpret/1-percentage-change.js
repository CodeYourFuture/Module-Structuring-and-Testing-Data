let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); // Fixed syntax error by adding missing comma

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


 // Answers 

// a) Function Calls (5 total):

// carPrice.replaceAll(",", "") (Line 3)
// Number() (Line 3)
// priceAfterOneYear.replaceAll(",", "") (Line 4)
// Number() (Line 4)
//console.log() (Line 8)

// b) Error Fix:

// Error line: Line 4 - missing comma in .replaceAll("," "")
// Fix: Change to .replaceAll(",", "")
// Error type: SyntaxError: missing ) after argument list

// c) Variable Reassignments:

// carPrice = Number(carPrice.replaceAll(",", "")) (Line 3)
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")) (Line 4)

// d) Variable Declarations:

//let carPrice = "10,000" (Line 1)
//let priceAfterOneYear = "8,543" (Line 2)
// const priceDifference = carPrice - priceAfterOneYear (Line 6)
// const percentageChange = (priceDifference / carPrice) * 100 (Line 7)

// e) Expression Purpose:

// Number(carPrice.replaceAll(",", "")) converts a formatted currency string with commas into a numeric value for mathematical calculations:
// Removes commas: "10,000" → "10000"
// Converts to number: "10000" → 10000

// Output: The percentage change is 14.57 (14.57% price decrease)