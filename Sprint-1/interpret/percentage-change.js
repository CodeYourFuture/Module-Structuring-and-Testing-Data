let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*  There are 5 function calls in this file. The function calls occur on the following lines:

Line 4: carPrice.replaceAll(",", "")
Line 5: priceAfterOneYear.replaceAll(",", "")
Line 4: Number(carPrice.replaceAll(",", ""))
Line 5: Number(priceAfterOneYear.replaceAll(",", ""))
Line 10: console.log(...)                                            
*/


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*  When running the code, I find out that the error occurs on Line 5:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

The issue is a syntax error because there is a missing comma between the parameters in replaceAll. 
Instead of replaceAll("," ""), it should be replaceAll(",", "").
*/

// c) Identify all the lines that are variable reassignment statements
/*   Variable reassignment occurs on the following lines:

Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/


// d) Identify all the lines that are variable declarations
/*  Variable declarations occur on the following lines:

Line 1: let carPrice = "10,000";
Line 2: let priceAfterOneYear = "8,543";
Line 7: const priceDifference = carPrice - priceAfterOneYear;
Line 8: const percentageChange = (priceDifference / carPrice) * 100;
*/



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*   The expression Number(carPrice.replaceAll(",", "")) performs two main operations:

1) replaceAll(",", ""): Removes all commas from the carPrice string (e.g., converting "10,000" to "10000").
2) Number(...): Converts the resulting string ("10000") into a number (10000).

The purpose of this expression is to convert the carPrice string, 
which includes commas, into a numerical format that can be used for arithmetic operations.
*/