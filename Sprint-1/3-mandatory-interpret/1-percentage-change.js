let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/**
 * There are two functions call: Number() and replaceAll()
 * And the function call is made on lines 4 and 5
 */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/**
 * The error is coming from line 5 and it's because it's missing a comma between the inner rounded braces ("," "").
 * To fix it is easy: Just insert a comma between the double commas (",", "")
 */

// c) Identify all the lines that are variable reassignment statements
/**
 *  The reassignment lines are 4 and 5
 */

// d) Identify all the lines that are variable declarations
/**
 * Lines 1, 2, 8 and 9
 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/**
 * First the expression apply the function replaceAll(",", "") to strip out all comma in the string  
 * assign to a variable carPrice then the function Number() convert the string into a number.
 */
