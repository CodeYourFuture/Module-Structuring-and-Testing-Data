let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//[ChunYanWong] 3 . They are Number, replaceAll and console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// [ChunYanWong] syntax error - add the comma to fix it.

// c) Identify all the lines that are variable reassignment statements
// [ChunYanWong] line 4 and 5

// d) Identify all the lines that are variable declarations
// [ChunYanWong] line 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// [ChunYanWong] remove the comma for the amounts so that they can be converted to numbers for calculation 
