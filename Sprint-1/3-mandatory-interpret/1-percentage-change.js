let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/* Answers 👀
There are 5 function calls

1. carPrice.replaceAll(",", "")
2. Number(carPrice.replaceAll(",", ""))
3. priceAfterOneYear.replaceAll("," "")
4. Number(priceAfterOneYear.replaceAll("," ""))
5. console.log(`The percentage change is ${percentageChange}`)
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/* Answer 👀

Line 5

"SyntaxError: missing ) after argument list"
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

correct bit should be to add a comma inbetween such as below:

replaceAll(",", "")
*/

// c) Identify all the lines that are variable reassignment statements

/* Answer 👀

Lines 4 and 5

1. carPrice = Number(carPrice.replaceAll(",", ""));

2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/


// d) Identify all the lines that are variable declarations

/* Answer 👀

Lines 1, 2, 7, 8
*/


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/* 

It takes out the commas in the string "10,000" making it an integer/number "10000"

*/