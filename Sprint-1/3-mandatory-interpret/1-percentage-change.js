let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answer a: 1: carPrice.replaceAll(",", "")- line-4, 2:Number(...)- line-4, 3: priceAfterOneYear.replaceAll(",","")__line-5, 4: Number(...)__line-5, 5: console.log(...)__line-10.
// Answer b: the line 5 has an error, the  second replaceAll is missing a comma between the two arguments. to fix this problem add a comma between the two arguments.
// Answer c: line 4 and 5 are variable reassignments.
// Answer d: line 1,2,7 and 8 are variable declarations.
// Answer e: 1: carPrice.replaceAll(",", "")) replaces all commas in "10,000" in an empty string "10000". 2: Number("10000") converts the string "10000" into a number 10000.
// and the  purpose of this expression is to clean the price string by removing commas and convert it into a number.