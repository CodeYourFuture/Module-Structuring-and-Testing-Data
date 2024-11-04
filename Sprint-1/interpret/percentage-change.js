let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls
// functions calls: 
// carPrice = Number(carPrice.replaceAll(",", "")); function call - Number() ond function call - .replaceAll() on the fourth line
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); function call - Number() ond function call - .replaceAll() on the fifth line
//console.log(`The percentage change is ${percentageChange}`); function call - console.log on the tenth line

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Expected ',' between the arguments of .replaceAll()

// c) Identify all the lines that are variable reassignment statements
// There are two reassignment statement - carPrice (on the fourth line) and priceAfterOneYear (on the fifth line)

// d) Identify all the lines that are variable declarations
//There are four lines that are variable declarations in the code.
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) changes the carPrice from a text with commas, like "10,000", into a plain number, like 10000, convert to a Number, so it can be used in calculations.