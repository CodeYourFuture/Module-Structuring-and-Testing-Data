let carPrice = "10,000"; // changed the variable to let 
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are 3 functions as follows: 
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); 
// and console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// First it came from a variable on the line 1, variable was corrected to let 
// Second error came from priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// a comma was missing in the syntax of ",", "" to separate the parameters.
// c) Identify all the lines that are variable reassignment statements
// the following lines are variable reassignment statements:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// 
// d) Identify all the lines that are variable declarations
// These are variable declarations with identifier let and const
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Firstly, the carPrice.replaceAll(",","")) expression replaces all commas in a string carPrice with empty string "". Numbers with commas are now without commas "10,000" "10000".
// Secondly, Number(...) operation is converting string "10000" to a numerical value.