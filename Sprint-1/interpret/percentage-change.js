let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*Line 4: Number() replaceAll() | line 5: Number() replaceAll() | line 10: console.log() */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*Line 4; carPrice.replaceAll(",","") */

// c) Identify all the lines that are variable reassignment statements
/*Line 4, line 5 */

// d) Identify all the lines that are variable declarations
/*Line 1, line 2, line 7, line 8 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*firstly, replaceAll string function gets executed. it replaces , in the carPrice variable's value with "". secondly, Number function changes 
carPrice's data type from string to numeric. */
