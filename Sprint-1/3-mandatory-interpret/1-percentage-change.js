let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made:
// 5 which are: 2 number(), 2 replaceAll() and 1 console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is on line 5, there is a missing comma that needs to seperate the arguments of replaceAll().Will fix it by putting the comma. 

// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5

// d) Identify all the lines that are variable declarations
// Line 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The purpose is to:

// Remove formatting (commas) from a number string

// Convert the cleaned string into a real number

// Allow mathematical calculations to be performed
