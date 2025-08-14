let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll("," , ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: We have 5 function calls. Number(),replaceAll(),console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer: The error is on Line 5 because replaceAll("," "") is incorrectly written. The correct syntax is replaceAll(",", "").

// c) Identify all the lines that are variable reassignment statements
// Answer: Line 4 and 5 are variable reassign statement.

// d) Identify all the lines that are variable declarations
// Answer: Line 1,2, 7 and 8 are variable declaration.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: we need to remove comma from  this expression Number(carPrice.replaceAll(",","")) to allow us convert number to string using .string() method. this allows mathematical expression to work correctly in java.
