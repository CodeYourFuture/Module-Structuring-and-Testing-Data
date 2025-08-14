let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Function calls: 
// Line 4 - .replaceAll, Number
// Line 5 - .replaceAll, Number
// Line 10 - console.log



// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// from line :5
// fix: add , - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// Why is the original line causing an error?
// We were trying to subtract two string values like "30000" - "24000" but 
// In JavaScript, strings with commas (like "24,000") can’t be parsed directly to numbers 
// So this fails



// c) Identify all the lines that are variable reassignment statements
// line  4 , 5



// d) Identify all the lines that are variable declarations
// lines : 1 , 2 , 7 , 8
// Line 1: let carPrice
// Line 2: let priceAfterOneYear
// Line 6: const priceDifference
// Line 7: const percentageChange



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// method replaceAll is changing a specific character and replace it with the one we asked for. 
// function number which changes a string number value to integers.
// purpose : is to have a integer instead of a string 

// explain why we want to convert it into an integer?
// We use Number(carPrice.replaceAll(",", "")) to convert a formatted string into a real number, 
// so we can do mathematical calculations on it.