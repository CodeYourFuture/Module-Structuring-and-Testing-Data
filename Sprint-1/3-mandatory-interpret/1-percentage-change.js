let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//------->ans: build-in function call line numbers 4,5 and 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//------->ans: error at line 5.
//------->ans: add a missing comma
// c) Identify all the lines that are variable reassignment statements
//------->ans: line 4 (carPrice) and line 5 (priceAfterOneYear)
// d) Identify all the lines that are variable declarations
//------->and: line 1 and 2
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//------->and: replace character comma with nothing or in other words remove it or delete it
