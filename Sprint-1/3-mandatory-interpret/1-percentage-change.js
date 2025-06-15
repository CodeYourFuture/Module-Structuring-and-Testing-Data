let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 1) carPrice = Number(carPrice.replaceAll(",", ""));  [Number() and replaceAll()]
// 2)priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); [Number() and replaceAll()]
// 3)console.log(`The percentage change is ${percentageChange}  [console.log()]

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// b) Line 5 contains a syntax error — there is a missing comma inside the replaceAll() function.
// Fix: add a comma between the two arguments: replaceAll(",", "")


// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes all commas from the string and replaces them with an empty string.
// Then, it converts the cleaned string into a numeric value.
// The purpose is to convert a formatted number string (e.g., "10,000") into a usable number (10000) for calculations.
