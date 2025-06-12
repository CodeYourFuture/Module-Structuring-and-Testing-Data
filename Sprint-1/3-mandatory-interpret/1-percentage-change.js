let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// !There are 5 function calls in this file:
// 1. carPrice = Number(carPrice.replaceAll(",", ""));
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// 3. Number(carPrice.replaceAll(",", ""));
// 4. Number(priceAfterOneYear.replaceAll(",", ""));
// 5. console.log(`The percentage change is ${percentageChange}`);


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5, where there is a missing comma in the ("", "") which is causing the replaceAll function to not work correctly.
// To fix this problem, we need to ensure that the replaceAll function is called correctly with the right parameters(",", "").

// c) Identify all the lines that are variable reassignment statements
// Lines that are variable reassignment statements:
// 3. carPrice = Number(carPrice.replaceAll(",", "")); 
// 4. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));.

// d) Identify all the lines that are variable declarations
// 1. Let carPrice = "10,000";
// 2. let priceAfterOneYear = "8,543";
// 3. const priceDifference = carPrice - priceAfterOneYear;
// 4. const percentageChange = (priceDifference / carPrice) * 100; 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
