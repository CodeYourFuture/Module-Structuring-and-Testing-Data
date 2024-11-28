let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);


5 lines 
Number(carPrice.replaceAll(",", "")); (Line 3)
carPrice.replaceAll(",", "") (within Line 3)
Number(priceAfterOneYear.replaceAll(",", "")); (Line 4)
priceAfterOneYear.replaceAll(",", "") (within Line 4)
console.log(...) (Line 8)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
Line 4 comma is missing
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
Lines 3 & 4
// d) Identify all the lines that are variable declarations
Lines 1,2,6 & 7
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
replaceAll(",", "") removes all commas from the string, making it possible for Number(...) to convert the string into a valid numerical value that JavaScript can work with in calculations.
For example: 8,432 to 8432