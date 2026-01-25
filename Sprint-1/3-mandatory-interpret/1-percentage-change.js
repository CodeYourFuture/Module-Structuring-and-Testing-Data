let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 functions calls. They are on lines, 4, 5, and 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There was a comma missing in line 5 in replaceAll("," ""). This was needed because replaceAll is a
// function that takes two arguments. The missing comma caused a syntax error.

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements where carPrice and priceAfterOneYear are
// reassigned new values.

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7 and 8 are variable declarations where carPrice and priceAfterOneYear are declared.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Number(carPrice.replaceAll(",", "")) removes all commas from the string carPrice and then converts it to a
// number.
