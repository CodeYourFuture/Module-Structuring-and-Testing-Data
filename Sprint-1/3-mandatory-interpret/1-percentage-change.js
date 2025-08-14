let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4, 4, 5, 5, 10 total 5 function calls. 
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// line 5 the replaceAll function requires two parameters, which must be separated by coma. 
// c) Identify all the lines that are variable reassignment statements
// There are variable reassignments statements on the lines: 4 and 5
// d) Identify all the lines that are variable declarations
// There are variable declarations in the lines: 1, 2, 7 and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The carPrice include the character , to made it a number, the comma is replaced by "" (nothing) and use the function Number()
