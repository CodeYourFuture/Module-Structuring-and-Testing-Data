let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// --- Answers to the questions ---

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Function calls:
// - Line 4: carPrice.replaceAll(",", "")
// - Line 4: Number(...)
// - Line 5: priceAfterOneYear.replaceAll("," "") --> syntax error here
// - Line 5: Number(...)
// - Line 10: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// Error at line 5: SyntaxError due to missing comma in replaceAll arguments
// Fix: add the missing comma inside replaceAll:
// priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements

// Reassignments:
// - Line 4: carPrice = Number(...)
// - Line 5: priceAfterOneYear = Number(...)

// d) Identify all the lines that are variable declarations

// Declarations:
// - Line 1: let carPrice = "10,000";
// - Line 2: let priceAfterOneYear = "8,543";
// - Line 7: const priceDifference = ...
// - Line 10: const percentageChange = ...

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Explanation:
// - carPrice.replaceAll(",","") removes all commas from the string "10,000", turning it into "10000".
// - Number(...) converts the resulting string "10000" into the numeric value 10000.
// This allows mathematical operations on carPrice, which is originally a formatted string.

