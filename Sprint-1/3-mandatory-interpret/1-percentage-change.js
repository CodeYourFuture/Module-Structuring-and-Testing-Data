let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// a) There are 5 function calls in this file:
//  `carPrice.replaceAll(",", "")` on line 5
//  `priceAfterOneYear.replaceAll(",", "")` on line 6
//  `Number(...)` on lines 4 and 5
// console.log on line 10.
// b) A comma is missing between the first and second string arguments which causes the error.
//c) The variable reassignment statements are:
//  `carPrice = Number(carPrice.replaceAll(",", ""));` on line 5
//  `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));` on line 6
// d) The variable declarations are:
// `let carPrice = "10,000";` on line 1
// `let priceAfterOneYear = "8,543";` on line 2
// e) The expression `Number(carPrice.replaceAll(",", ""))` is converting car price, which contains a comma, into a number.  