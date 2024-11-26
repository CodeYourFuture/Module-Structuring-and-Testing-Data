let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = ((priceDifference / carPrice) * 100).toFixed(2); // Rounds to two decimal places

console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//4 Lines = 4, 5, 8, 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*it is on line 5 . Error: SyntaxError: missing ) after argument list. 
//.js:5
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
SyntaxError: missing ) after argument list

Fix:
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));*/

// c) Identify all the lines that are variable reassignment statements
//4, 5

// d) Identify all the lines that are variable declarations
//1,2 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//it transform a format number price in a number

// The percentage change is 14.57%
// gisdellabella@Giss-MBP interpret %
