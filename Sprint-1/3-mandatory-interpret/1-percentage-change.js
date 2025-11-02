let carPrice = "10,000"; // variable declaration
let priceAfterOneYear = "8,543"; // variable declaration 

carPrice = Number(carPrice.replaceAll(",", "")); // variable reassignment statement and function call (.replaceall is replacing the comma for a empty space and the number() is converting the string into a number value)
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); // variable reassignment statement and function call

const priceDifference = carPrice - priceAfterOneYear; // variable declaration
const percentageChange = (priceDifference / carPrice) * 100; // variable declaration

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
