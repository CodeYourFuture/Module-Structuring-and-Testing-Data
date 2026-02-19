let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// a) 5 function calls. 2 in line 4, 2 in line 5, and 1 in line 10.

// b) SyntaxError: missing ) after argument list. There is a missing comma after argument. It can be fixed by adding a comma.

// c) line 4 and 5.

// d) line 1,2, 7, and 8.

// e)  The expression is used to remove commas from the string and convert it into a number so it can be used in calculations.