let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//  they are 2 function calls. line 4 and 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is coming from line 5. the error was coma missing  to separate the argument replaceAll function.

// c) Identify all the lines that are variable reassignment statements
// the variable reassignment are line 4 and 5

// d) Identify all the lines that are variable declarations
//the lines that are variable declaration is 1,2,7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// this expression is removing the "," from the carPrice as string and turning carPrice into a number.
// the purpose is to change carPrice into a number so we can do operations.
