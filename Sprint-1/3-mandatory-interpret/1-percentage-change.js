let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4, 5, 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It is coming from line 5. Because ("," "") is missing a comma separating the strings.

// c) Identify all the lines that are variable reassignment statements
// 4, 5.

// d) Identify all the lines that are variable declarations
// 1, 2, 7 , 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// JavaScript can't do math with commas.
// replaceAll(",", "") part finds the , in "10,000" and turns it into nothing "", turning the String into "10000".
// Even without the comma, it's still a String (text). The number part converts the text "10000" into the actual Number 10000.
// The purpose is so it turns a string of numbers into actual numbers to do math with.