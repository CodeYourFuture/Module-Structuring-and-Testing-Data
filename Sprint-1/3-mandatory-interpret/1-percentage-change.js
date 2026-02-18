let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Function calls are determined by the presence of parentheses "()" after a function name.
// Therefore in this file, there are 6 function calls:

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// The error is occurring on line 5:
// SyntaxError: missing ) after argument list. This is because there is a missing comma between the two arguments
// (search value & replace value) in the replaceAll function.
// To fix this problem, we can add a comma between the two arguments.

// c) Identify all the lines that are variable reassignment statements

// These lines include:
// line 3: let carPrice = "10,000"; to carPrice = Number(carPrice.replaceAll(",", ""));
// line 4: let priceAfterOneYear = "8,543"; to priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations

// These lines include:
// line 3: let carPrice = "10,000";
// line 4: let priceAfterOneYear = "8,543";
// line 6: const priceDifference = carPrice - priceAfterOneYear;
// line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// The purpose of this is expression is to search for remove all commas from the string value of carPrice and replace them with an empty string.
// This converts the CarPrice value from a string to a type number, which we can now perform mathematical operations on.
// Since the purpose of this program is to calculate the percentage change in the price of a car.
// We need type number values to perform the necessary calculations.
