let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 functions :
// Number(carPrice.replaceAll(",", "")) line 4
// carPrice.replaceAll(",", "") line 4
// Number(priceAfterOneYear.replaceAll("," "")) line 5
// priceAfterOneYear.replaceAll("," "") line 5
// console.log(`The percentage change is ${percentageChange}`) line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// An error is on line 5, (priceAfterOneYear.replaceAll(",","") missing comma

// c) Identify all the lines that are variable reassignment statements
// Line 4, 5

// d) Identify all the lines that are variable declarations
// 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Removes all commas from the string and after convert string into the number.
