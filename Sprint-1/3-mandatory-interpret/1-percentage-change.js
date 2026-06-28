let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are 5 function calls in the file. Function call is when parentheses is added to its name: name().
/* The Lines where function call is made:
 replaceAll(",","") which appear twice in both line 4 carPrice.replaceAll(",", "") and
 line 5 priceAfterOneYear.replaceAll("," "").

 Number(...) which appears twice aswell:
 Also in line 4 Number(carPrice.replaceAll(",", "")) and line 5 Number(priceAfterOneYear.replaceAll("," ""))

 console.log(...) in line 10
 console.log(`The percentage change is ${percentageChange}`)
 */


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* The error is in line 5.It throws the error SyntaxError: missing ) after argument list because it 
is expecting a comma between the arguments in replaceAll(",", "") but sees this replaceAll(","  "").
To fix it you just add the missing comma.*/

// c) Identify all the lines that are variable reassignment statements
/*  Line 4 and 5 are the variable reassignment statements.
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
*/

// d) Identify all the lines that are variable declarations
/* Lines 1,2,7 and 8 are variable declarations.
let carPrice = "10,000";
let priceAfterOneYear = "8,543";

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* The expression first uses replaceAll(",","") to remove all commas from the string "10,000" turning it into "10000". Then the Number(...) converts that string into the actual number.
The purpose is to convert a price written as string with commas into a real number so mathematical calculations can be performed.
*/