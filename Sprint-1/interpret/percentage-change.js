let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
/*
// Read the code and then answer the questions below

a) How many function calls are there in this file? Write down all the lines where a function call is made

Line 4: carPrice.replaceAll(",", "")
Line 4: Number(carPrice.replaceAll(",", ""))
Line 5: priceAfterOneYear.replaceAll(",", "")
Line 5: Number(priceAfterOneYear.replaceAll(",", ""))
Line 10: console.log(...)


b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

There was a SyntaxError due to a missing comma in the replaceAll method(Line 5). 
This error happened because replaceAll requires two arguments: the character to replace (,), 
and the replacement (an empty string ""). Adding the comma resolved the error.


c) Identify all the lines that are variable reassignment statements

Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


d) Identify all the lines that are variable declarations

Line 1: let carPrice = "10,000";
Line 2: let priceAfterOneYear = "8,543";
Line 7: const priceDifference = carPrice - priceAfterOneYear;
Line 8: const percentageChange = (priceDifference / carPrice) * 100;


e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

The expression Number(carPrice.replaceAll(",", "")) takes the string value of carPrice and removes 
all commas "," from it, and the Number function takes the string "10000" and converts it to a 
number, so it changes "10000" to 10000.


*/
