let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls on line 4,5 & 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is on line 5. It is missing a , syntax. I have fixed it

// c) Identify all the lines that are variable reassignment statements
// Lines 4 & 5 are variable reassignment statements

// d) Identify all the lines that are variable declarations
// Variable declarations are lines 1,2,7 & 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression is removing the , between the car price and making it into a number without ,