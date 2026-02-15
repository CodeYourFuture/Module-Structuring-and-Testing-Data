let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", "")); // returns 10000
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));//returns 8543
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); 
// incorrect code missing syntax ie a comma

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`); //returns The percentage change is 14.57

// Read the code and then answer the questions below

// a) How many function calls are there in this file? 
// Write down all the lines where a function call is made
//*Answer
//There are 5 function calls: 2* Number(), 2*.replaceAll() and 1* console.log().
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));
//console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - 
// why is this error occurring? How can you fix this problem?
//*Answer it is missing a comma on line 5.
// Add the comma to fix it: ...replaceAll(",",""));

// c) Identify all the lines that are variable reassignment statements
//*Answer
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));


// d) Identify all the lines that are variable declarations
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression 
// Number(carPrice.replaceAll(",","")) is doing - 
// what is the purpose of this expression?
//It converts the carPrice into a number and removes the spaces and commas.


