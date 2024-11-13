let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* There are 7 function calls in total:
   - 2 Number calls
   - 2 replaceAll calls
   - 1 console.log */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* The error is coming from line 5 after the call to replaceAll, there is a comma missing between the parameters. */

// c) Identify all the lines that are variable reassignment statements
/* The variable reassignment lines are: 4 and 5 for carPrice and priceAfterOneYear */

// d) Identify all the lines that are variable declarations
/* All the variable declaration lines are: 1, 2, 4, 5, 7 and 8 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* The expression is going to replace any commas in a number with null so that it is a string,
which could be used in any math calculations. The comma would cause problems. */
