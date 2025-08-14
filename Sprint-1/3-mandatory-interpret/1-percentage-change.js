let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//3
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//the error is coming from line 5 because there is a missing comma (syntax error). we can fix this by adding a comma
// c) Identify all the lines that are variable reassignment statements
// line 4 and line 5
// d) Identify all the lines that are variable declarations
//line 1, line 2, line 7 and line 8 
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it replaces all the comma strings in carPrice with an empty string then converts in into a number