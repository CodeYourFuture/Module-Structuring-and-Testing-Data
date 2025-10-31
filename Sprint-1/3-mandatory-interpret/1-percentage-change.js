let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// lines 4,5 replaceAll() function is called , and then Number() function is called, and then console.log once on line 10
// so total 5 function calls

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// error is in line 5, because of a missing , in replaceAll("," ""), which I will add to fix the problem.

// c) Identify all the lines that are variable reassignment statements
//lines 4 and 5 are variable reassignment statements

// d) Identify all the lines that are variable declarations
//lines 1 and 2, as well as 7 and 8 are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//.replaceAll() is removing the , in carPrice and Number() is turning it from a string into a number
