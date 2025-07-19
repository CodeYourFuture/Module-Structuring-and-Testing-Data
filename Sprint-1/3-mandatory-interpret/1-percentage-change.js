let carPrice = "10,000";
let priceAfterOneYear = "8,543";
// convert both strings to numbers
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//  
// c) Identify all the lines that are variable reassignment statements
// line 4 and line 5
// d) Identify all the lines that are variable declarations
// line 1 2 7 and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it wants to remove the comma in the variables and replace it with an empty string, then convert the string to a number