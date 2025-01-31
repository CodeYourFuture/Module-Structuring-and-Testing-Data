let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//carPrice.replaceAll(",", "") (Line 4)
//Number(carPrice.replaceAll(",", "")) (Line 4)
//priceAfterOneYear.replaceAll("," "")) (Line 5) 
//Number(priceAfterOneYear.replaceAll("," "")) (Line 5)
//console.log(\The percentage change is ${percentageChange}`)` (Line 10)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//There's a missing comma. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// c) Identify all the lines that are variable reassignment statements
//Line 4 Line 5  Variable reassignment happens when an existing variable is given a new value.

// d) Identify all the lines that are variable declarations
//lines 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Removes all commas from the string. It is going to convert a price string into a proper number.
