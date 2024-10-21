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
There a 5 function calls in this file.
    1. carPrice = Number(carPrice.replaceAll(",", "")); // Number() and replaceAll()
    2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); // Number() and replaceAll()
    3. console.log(`The percentage change is ${percentageChange}`);
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/**
 * The error was occurring in line 5.
 * It is occurring because there is comma between the pattern, replacement and the replaceAll() method.
 * I fixed it by adding a comma between the two
 */

// c) Identify all the lines that are variable reassignment statements
/*
    Lines 4 and 5 are variable reassignments. 
    carPrice = Number(carPrice.replaceAll(",", ""));
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));
    */
// d) Identify all the lines that are variable declarations
/**
 * let carPrice = "10,000";
 * let priceAfterOneYear = "8,543";
 * const priceDifference = carPrice - priceAfterOneYear;
 * const percentageChange = (priceDifference / carPrice) * 100;
 * 
 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*this line of code does the following:
1. carPrice.ReplaceAll(",", ""): removes the comma in the carPrice variable / replace the comma with the no space
2.Number(carPrice.ReplaceAll(",", ""))): convert the value into an integer.

*/
