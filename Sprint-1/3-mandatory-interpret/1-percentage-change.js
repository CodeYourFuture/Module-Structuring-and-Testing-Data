let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made => linnes 4,5, 7, and 8
// There are four function calls in this file:
// - Line 4: carPrice.replaceAll(",", "")
// - Line 5: priceAfterOneYear.replaceAll(",", "")
// - Line 7: Number(carPrice.replaceAll(",", ""))
// - Line 8: Number(priceAfterOneYear.replaceAll(",", ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?=>
    // The error occurs on line 5 because there is a syntax error in the replaceAll function call. The second argument should be an empty string, but there is a space before the closing double quote.
// To fix this, remove the space before the closing double quote on line 5:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); // Corrected line

// c) Identify all the lines that are variable reassignment statements => lines 4 and 5

// d) Identify all the lines that are variable declarations => lines 1, 2, 7, and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) is converting the string representation of the car price (which includes commas) into a number by first removing the commas using replaceAll and then converting the resulting string to a number using the Number function. This allows for numerical calculations to be performed on the car price.