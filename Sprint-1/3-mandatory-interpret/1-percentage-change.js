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
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There was a missing ','
// c) Identify all the lines that are variable reassignment statements
// lines 4 and 5 are variable reassignment statements
// d) Identify all the lines that are variable declarations
// lines 1, 2, 7 and 8 are variable declarations
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression is replacing the , in '10,000' with nothing - essentially removing it 