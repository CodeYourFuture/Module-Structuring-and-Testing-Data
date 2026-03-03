let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/**
 * There are 5 function calls in this file:

 * carPrice.replaceAll(",", "") - Line 4
 * Number() (enclosing the replaceAll result) - Line 4
 * priceAfterOneYear.replaceAll("," "") - Line 5 (contains a syntax error but is intended as a function call)
 * Number() (wrapping the replaceAll result) - Line 5 (intended as a function call)
 * console.log() - Line 10
 */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/**
 * Error location: Line 5

 * Why the error occurs:
 * There's a syntax error on line 5 - a comma is missing between the parameters in the replaceAll() method. The  * code shows replaceAll("," "") but should be replaceAll(",", "").
 *
 * How to fix:
 * Add a comma between the parameters:
 */

// c) Identify all the lines that are variable reassignment statements

/**
 * Lines with variable reassignment:
 * Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
 * Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); (after fixing the syntax error)
 * These lines reassign new values to the existing variables.
 */

// d) Identify all the lines that are variable declarations

/**
 * Lines with variable declarations:

 * Line 1: let carPrice = "10,000";
 * Line 2: let priceAfterOneYear = "8,543";
 * Line 7: const priceDifference = carPrice - priceAfterOneYear;
 * Line 8: const percentageChange = (priceDifference / carPrice) * 100;
 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/**
 * This expression performs two operations:
 *
 * carPrice.replaceAll(",", "").
 * It removes all commas from the string "10,000", converting it to "10000" (a string without commas)
 * Number() - Converts the resulting string "10000" into an actual number type (10000)
 * Ojective: The overall purpose is to convert a formatted price string (like "10,000") into a numeric value that can be used for mathematical calculations. This allows the code to properly calculate the price difference and percentage change, which wouldn't work correctly with the original string values.
 */

