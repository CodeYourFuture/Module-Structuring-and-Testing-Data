let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer: 5 function calls on lines 4,5,10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer : error on line 5-missing coma, fixed it by adding coma

// c) Identify all the lines that are variable reassignment statements
//Answer: lines 4 and 5

// d) Identify all the lines that are variable declarations
//Answer: lines 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Answer: it elimkinates the comma from '10,000' and turns it from a string to a number
