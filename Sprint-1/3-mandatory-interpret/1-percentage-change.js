let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4(.replaceAll), 5(.replaceAll)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// from line :5
// fix: add , - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// line  4 , 5

// d) Identify all the lines that are variable declarations
// line : 1 , 2

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// method replaceAll is changing a specific character and replace it with the one we asked for. 
// function number which changes a string number value to integers.
// purpose : is to have a integer instead of a string 
